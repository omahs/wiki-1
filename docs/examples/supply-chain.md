---
sidebar_position: 12
---

# Supply chain

## Introduction

In logistics, a supply chain is a system for tracking and delivering to an end consumer various items. As a rule, such systems can't work without a lot of paperwork and other layers of bureaucracy. All of this costs a lot of time and money and increases the likelihood of an accidental error or, worst of all, a fraud. With the help of smart contract and blockchain technologies, it is possible to eliminate these problems by making a supply chain more efficient, reliable and transparent.

The source code of the Supply Chain smart conrtact example is avaialble on [GitHub](https://github.com/gear-dapps/supply-chain).

## Logic

* Each newly produced item gets the NFT (in Gear's context - [Gear non-fungible token (gNFT)](gnft-721.md) and its ID equals an ID of the item. Then, as an item moves along a supply chain, an item's NFT transfers between a supply chain program, item's producer, and future distributor, retailer and end consumer.
* Anyone who knows an item's ID can get item info.
* Sale, purchase, delivery is made in [Gear fungible tokens (gFT)](gft-20.md).

Item info has the following struct:
```rust
pub struct ItemInfo {
    /// Item’s producer [`ActorId`].
    pub producer: ActorId,
    /// [`ActorId`] of an item’s current or past distributor (depends on item’s
    /// `state`). If it equals [`ActorId::zero()`], then it means that an item
    /// has never had a distributor.
    pub distributor: ActorId,
    /// [`ActorId`] of an item’s current or past retailer (depends on item’s
    /// `state`). If it equals [`ActorId::zero()`], then it means that an item
    /// has never had a retailer.
    pub retailer: ActorId,

    pub state: ItemState,
    /// An item’s price. If it equals 0, then, depending on item’s `state`, an
    /// item is sold for free or has never been put up for sale.
    pub price: u128,
    /// Milliseconds during which a current seller should deliver an item.
    pub delivery_time: u64,
}
```

And `ItemState` has the following struct and inner enums:
```rust
pub struct ItemState {
    pub state: ItemEventState,
    pub by: Role,
}

pub enum ItemEventState {
    Produced,
    Purchased,
    Received,
    Processed,
    Packaged,
    ForSale,
    Approved,
    Shipped,
}

pub enum Role {
    Producer,
    Distributor,
    Retailer,
    Consumer,
}
```

## Interface

### Initialization

```rust
/// Initializes the Supply chain contract.
///
/// # Requirements
/// - Each [`ActorId`] of `producers`, `distributors`, and `retailers` mustn't
/// equal [`ActorId::zero()`].
#[derive(Encode, Decode, Hash, TypeInfo, Debug, Default, PartialEq, Eq, PartialOrd, Ord, Clone)]
pub struct Initialize {
    /// IDs of actors that'll have the right to interact with a supply chain on
    /// behalf of a producer.
    pub producers: Vec<ActorId>,
    /// IDs of actors that'll have the right to interact with a supply chain on
    /// behalf of a distributor.
    pub distributors: Vec<ActorId>,
    /// IDs of actors that'll have the right to interact with a supply chain on
    /// behalf of a retailer.
    pub retailers: Vec<ActorId>,

    /// A FT contract [`ActorId`].
    pub fungible_token: ActorId,
    /// An NFT contract [`ActorId`].
    pub non_fungible_token: ActorId,
}
```

### Actions

```rust
/// Sends the contract info about what it should do.
#[derive(Encode, Decode, TypeInfo, Debug, PartialEq, Eq, PartialOrd, Ord, Clone)]
pub struct Action {
    pub action: InnerAction,
    pub kind: TransactionKind,
}

/// A part of [`Action`].
///
/// Determines how an action will be processed.
///
/// The contract has a transaction caching mechanism for a continuation of
/// partially processed asynchronous actions. Most often, the reason of an
/// underprocession is the lack of gas.
///
/// Important notes:
/// - Only the last sent asynchronous action for
/// [`msg::source()`](gstd::msg::source) is cached.
/// - Non-asynchronous actions are never cached.
/// - There's no guarantee every underprocessed asynchronous action will be
/// cached. Use [`StateQuery::IsActionCached`] to check if some action is cached
/// for some [`ActorId`].
/// - It's possible to send a retry action with a different payload, and it'll
/// continue with it because, for some action, not all payload is saved in the
/// cache (see [`CachedAction`]).
/// - The cache memory has a limit, so when it's reached every oldest cached
/// action is replaced with a new one.
#[derive(
    Default, Encode, Decode, TypeInfo, Debug, PartialEq, Eq, PartialOrd, Ord, Clone, Copy, Hash,
)]
pub enum TransactionKind {
    #[default]
    New,
    Retry,
}

/// A part of [`Action`].
#[derive(Encode, Decode, TypeInfo, Debug, PartialEq, Eq, PartialOrd, Ord, Clone)]
pub enum InnerAction {
    Producer(ProducerAction),
    Distributor(DistributorAction),
    Retailer(RetailerAction),
    Consumer(ConsumerAction),
}
/// Actions for a producer.
///
/// Should be used inside [`InnerAction::Producer`].
#[derive(Encode, Decode, TypeInfo, Debug, PartialEq, Eq, PartialOrd, Ord, Clone)]
pub enum ProducerAction {
    /// Produces one item and a corresponding NFT with given `token_metadata`.
    ///
    /// Transfers the created NFT for the item to a producer
    /// ([`msg::source()`]).
    ///
    /// # Requirements
    /// - [`msg::source()`] must be a producer in a supply chain.
    ///
    /// On success, replies with [`Event`] where [`ItemState`] contains
    /// [`ItemEventState::Produced`] & [`Role::Producer`].
    ///
    /// [`msg::source()`]: gstd::msg::source
    Produce { token_metadata: TokenMetadata },

    /// Puts a produced item up for sale to distributors for given `price` on
    /// behalf of a producer.
    ///
    /// Transfers an item's NFT to the Supply chain contract
    /// ([`exec::program_id()`](gstd::exec::program_id)).
    ///
    /// # Requirements
    /// - The item must exist in a supply chain.
    /// - [`msg::source()`](gstd::msg::source) must be the producer of the item.
    /// - Item's [`ItemState`] must contain [`ItemEventState::Produced`] &
    /// [`Role::Producer`].
    ///
    /// On success, replies with [`Event`] where [`ItemState`] contains
    /// [`ItemEventState::ForSale`] & [`Role::Producer`].
    PutUpForSale { item_id: ItemId, price: u128 },

    /// Approves or not a distributor's purchase on behalf of a producer.
    ///
    /// If the purchase is approved, then item's [`ItemEventState`] changes to
    /// [`Approved`](ItemEventState::Approved) and, from that moment, an item
    /// can be shipped (by [`ProducerAction::Ship`]).
    ///
    /// If the purchase is **not** approved, then fungible tokens for it are
    /// refunded from the Supply chain contract
    /// ([`exec::program_id()`](gstd::exec::program_id)) to the item's
    /// distributor and item's [`ItemEventState`] changes back to
    /// [`ForSale`](ItemEventState::ForSale).
    ///
    /// # Requirements
    /// - The item must exist in a supply chain.
    /// - [`msg::source()`](gstd::msg::source) must be the producer of the item.
    /// - Item's [`ItemState`] must contain [`ItemEventState::Produced`] &
    /// [`Role::Distributor`].
    ///
    /// On success, replies with [`Event`] where [`ItemState`] contains
    /// [`ItemEventState::Approved`]/[`ItemEventState::ForSale`] &
    /// [`Role::Producer`].
    Approve {
        item_id: ItemId,
        /// Yes ([`true`]) or no ([`false`]).
        approve: bool,
    },

    /// Starts a shipping of a purchased item to a distributor on behalf of a
    /// producer.
    ///
    /// Starts the countdown for the delivery time specified for the item in
    /// [`DistributorAction::Purchase`].
    ///
    /// # Requirements
    /// - The item must exist in a supply chain.
    /// - [`msg::source()`](gstd::msg::source) must be the producer of the item.
    /// - Item's [`ItemState`] must contain [`ItemEventState::Approved`] &
    /// [`Role::Producer`].
    ///
    /// On success, replies with [`Event`] where [`ItemState`] contains
    /// [`ItemEventState::Shipped`] & [`Role::Producer`].
    Ship(ItemId),
}

/// Actions for a distributor.
///
/// Should be used inside [`InnerAction::Distributor`].
#[derive(Encode, Decode, TypeInfo, Debug, PartialEq, Eq, PartialOrd, Ord, Clone, Copy, Hash)]
pub enum DistributorAction {
    /// Purchases an item from a producer on behalf of a distributor.
    ///
    /// Transfers fungible tokens for purchasing the item to the Supply chain
    /// contract ([`exec::program_id()`](gstd::exec::program_id)) until the item
    /// is received (by [`DistributorAction::Receive`]).
    ///
    /// **Note:** the item's producer must approve or not this purchase by
    /// [`ProducerAction::Approve`].
    ///
    /// # Requirements
    /// - The item must exist in a supply chain.
    /// - [`msg::source()`](gstd::msg::source) must be a distributor.
    /// - Item's [`ItemState`] must contain [`ItemEventState::ForSale`] &
    /// [`Role::Producer`].
    ///
    /// On success, replies with [`Event`] where [`ItemState`] contains
    /// [`ItemEventState::Purchased`] & [`Role::Distributor`].
    Purchase {
        item_id: ItemId,
        /// Milliseconds during which the producer of an item should deliver it.
        /// A countdown starts after [`ProducerAction::Ship`] is executed.
        delivery_time: u64,
    },

    /// Receives a shipped item from a producer on behalf of a distributor.
    ///
    /// Depending on the time spent on a delivery, transfers fungible tokens for
    /// purchasing the item from the Supply chain contract
    /// ([`exec::program_id()`](gstd::exec::program_id)) to the item's producer
    /// or, as a penalty for being late, refunds a half or all of them to the
    /// item's distributor ([`msg::source()`]).
    ///
    /// Transfers an item's NFT to the distributor ([`msg::source()`]).
    ///
    /// # Requirements
    /// - The item must exist in a supply chain.
    /// - [`msg::source()`] must be the distributor of the item.
    /// - Item's [`ItemState`] must contain [`ItemEventState::Shipped`] &
    /// [`Role::Producer`].
    ///
    /// On success, replies with [`Event`] where [`ItemState`] contains
    /// [`ItemEventState::Received`] & [`Role::Distributor`].
    ///
    /// [`msg::source()`]: gstd::msg::source
    Receive(ItemId),

    /// Processes a received item on behalf of a distributor.
    ///
    /// # Requirements
    /// - The item must exist in a supply chain.
    /// - [`msg::source()`](gstd::msg::source) must be the distributor of the
    /// item.
    /// - Item's [`ItemState`] must contain [`ItemEventState::Received`] &
    /// [`Role::Distributor`].
    ///
    /// On success, replies with [`Event`] where [`ItemState`] contains
    /// [`ItemEventState::Processed`] & [`Role::Distributor`].
    Process(ItemId),

    /// Packages a processed item on behalf of a distributor.
    ///
    /// # Requirements
    /// - The item must exist in a supply chain.
    /// - [`msg::source()`](gstd::msg::source) must be the distributor of the
    /// item.
    /// - Item's [`ItemState`] must contain [`ItemEventState::Processed`] &
    /// [`Role::Distributor`].
    ///
    /// On success, replies with [`Event`] where [`ItemState`] contains
    /// [`ItemEventState::Packaged`] & [`Role::Distributor`].
    Package(ItemId),

    /// Puts a packaged item up for sale to retailers for given `price` on
    /// behalf of a distributor.
    ///
    /// Transfers an item's NFT to the Supply chain contract
    /// ([`exec::program_id()`](gstd::exec::program_id)).
    ///
    /// # Requirements
    /// - The item must exist in a supply chain.
    /// - [`msg::source()`](gstd::msg::source) must be the distributor of the
    /// item.
    /// - Item's [`ItemState`] must contain [`ItemEventState::Packaged`] &
    /// [`Role::Distributor`].
    ///
    /// On success, replies with [`Event`] where [`ItemState`] contains
    /// [`ItemEventState::ForSale`] & [`Role::Distributor`].
    PutUpForSale { item_id: ItemId, price: u128 },

    /// Approves or not a retailer's purchase on behalf of a distributor.
    ///
    /// If the purchase is approved, then item's [`ItemEventState`] changes to
    /// [`Approved`](ItemEventState::Approved) and, from that moment, an item
    /// can be shipped (by [`DistributorAction::Ship`]).
    ///
    /// If the purchase is **not** approved, then fungible tokens for it are
    /// refunded from the Supply chain contract
    /// ([`exec::program_id()`](gstd::exec::program_id)) to the item's retailer
    /// and item's [`ItemEventState`] changes back to
    /// [`ForSale`](ItemEventState::ForSale).
    ///
    /// # Requirements
    /// - The item must exist in a supply chain.
    /// - [`msg::source()`](gstd::msg::source) must be the distributor of the
    /// item.
    /// - Item's [`ItemState`] must contain [`ItemEventState::Purchased`] &
    /// [`Role::Retailer`].
    ///
    /// On success, replies with [`Event`] where [`ItemState`] contains
    /// [`ItemEventState::Approved`]/[`ItemEventState::ForSale`] &
    /// [`Role::Distributor`].
    Approve {
        item_id: ItemId,
        /// Yes ([`true`]) or no ([`false`]).
        approve: bool,
    },

    /// Starts a shipping of a purchased item to a retailer on behalf of a
    /// distributor.
    ///
    /// Starts the countdown for the delivery time specified for the item in
    /// [`RetailerAction::Purchase`].
    ///
    /// # Requirements
    /// - The item must exist in a supply chain.
    /// - [`msg::source()`](gstd::msg::source) must be the distributor of the
    /// item.
    /// - Item's [`ItemState`] must contain [`ItemEventState::Approved`] &
    /// [`Role::Distributor`].
    ///
    /// On success, replies with [`Event`] where [`ItemState`] contains
    /// [`ItemEventState::Shipped`] & [`Role::Distributor`].
    Ship(ItemId),
}

/// Actions for a retailer.
///
/// Should be used inside [`InnerAction::Retailer`].
#[derive(Encode, Decode, TypeInfo, Debug, PartialEq, Eq, PartialOrd, Ord, Clone, Copy, Hash)]
pub enum RetailerAction {
    /// Purchases an item from a distributor on behalf of a retailer.
    ///
    /// Transfers fungible tokens for purchasing the item to the Supply chain
    /// contract ([`exec::program_id()`](gstd::exec::program_id)) until the item
    /// is received (by [`RetailerAction::Receive`]).
    ///
    /// **Note:** the item's distributor must approve or not this purchase by
    /// [`DistributorAction::Approve`].
    ///
    /// # Requirements
    /// - The item must exist in a supply chain.
    /// - [`msg::source()`](gstd::msg::source) must be a retailer.
    /// - Item's [`ItemState`] must contain [`ItemEventState::ForSale`] &
    /// [`Role::Distributor`].
    ///
    /// On success, replies with [`Event`] where [`ItemState`] contains
    /// [`ItemEventState::Purchased`] & [`Role::Retailer`].
    Purchase {
        item_id: ItemId,
        /// Milliseconds during which the distributor of an item should deliver
        /// it. A countdown starts after [`DistributorAction::Ship`] is
        /// executed.
        delivery_time: u64,
    },

    /// Receives a shipped item from a distributor on behalf of a retailer.
    ///
    /// Depending on the time spent on a delivery, transfers fungible tokens for
    /// purchasing the item from the Supply chain contract
    /// ([`exec::program_id()`](gstd::exec::program_id)) to the item's
    /// distributor or, as a penalty for being late, refunds a half or all of
    /// them to the item's retailer ([`msg::source()`]).
    ///
    /// Transfers an item's NFT to the retailer ([`msg::source()`]).
    ///
    /// # Requirements
    /// - The item must exist in a supply chain.
    /// - [`msg::source()`] must be the retailer of the item.
    /// - Item's [`ItemState`] must contain [`ItemEventState::Shipped`] &
    /// [`Role::Distributor`].
    ///
    /// On success, replies with [`Event`] where [`ItemState`] contains
    /// [`ItemEventState::Received`] & [`Role::Retailer`].
    ///
    /// [`msg::source()`]: gstd::msg::source
    Receive(ItemId),

    /// Puts a received item up for sale to consumers for given `price` on
    /// behalf of a retailer.
    ///
    /// Transfers an item's NFT to the Supply chain contract
    /// ([`exec::program_id()`](gstd::exec::program_id)).
    ///
    /// # Requirements
    /// - The item must exist in a supply chain.
    /// - [`msg::source()`](gstd::msg::source) must be the retailer of the item.
    /// - Item's [`ItemState`] must contain [`ItemEventState::Received`] &
    /// [`Role::Retailer`].
    ///
    /// On success, replies with [`Event`] where [`ItemState`] contains
    /// [`ItemEventState::ForSale`] & [`Role::Retailer`].
    PutUpForSale { item_id: ItemId, price: u128 },
}

/// Actions for a consumer.
///
/// Should be used inside [`InnerAction::Consumer`].
#[derive(Encode, Decode, TypeInfo, Debug, PartialEq, Eq, PartialOrd, Ord, Clone, Copy, Hash)]
pub enum ConsumerAction {
    /// Purchases an item from a retailer.
    ///
    /// Transfers fungible tokens for purchasing the item to its retailer.
    ///
    /// Transfers an item's NFT to the consumer
    /// ([`msg::source()`](gstd::msg::source)).
    ///
    /// # Requirements
    /// - The item must exist in a supply chain.
    /// - Item's [`ItemState`] must contain [`ItemEventState::ForSale`] &
    /// [`Role::Retailer`].
    ///
    /// On success, replies with [`Event`] where [`ItemState`] contains
    /// [`ItemEventState::Purchased`] & [`Role::Consumer`].
    Purchase(ItemId),
}
```

### Program metadata and state
Metadata interface description:

```rust
pub struct ContractMetadata;

impl Metadata for ContractMetadata {
    type Init = InOut<Initialize, Result<(), Error>>;
    type Handle = InOut<Action, Result<Event, Error>>;
    type Reply = ();
    type Others = ();
    type Signal = ();
    type State = State;
}
```
To display the full contract state information, the `state()` function is used:

```rust
#[no_mangle]
extern "C" fn state() {
    reply(common_state())
        .expect("Failed to encode or reply with `<ContractMetadata as Metadata>::State` from `state()`");
}
```
To display only necessary certain values from the state, you need to write a separate crate. In this crate, specify functions that will return the desired values from the `State` struct. For example - [gear-dapps/supply-chain/state](https://github.com/gear-dapps/supply-chain/tree/master/state):

```rust
#[metawasm]
pub trait Metawasm {
    type State = <ContractMetadata as Metadata>::State;

    fn item_info(item_id: ItemId, state: Self::State) -> Option<ItemInfo> {
        state.item_info(item_id)
    }

    fn participants(state: Self::State) -> Participants {
        state.participants()
    }

    fn roles(actor: ActorId, state: Self::State) -> Vec<Role> {
        state.roles(actor)
    }

    fn existing_items(state: Self::State) -> Vec<(ItemId, ItemInfo)> {
        state.items
    }

    fn fungible_token(state: Self::State) -> ActorId {
        state.fungible_token
    }

    fn non_fungible_token(state: Self::State) -> ActorId {
        state.non_fungible_token
    }

    fn is_action_cached(actor_action: ActorIdInnerSupplyChainAction, state: Self::State) -> bool {
        let (actor, action) = actor_action;

        state.is_action_cached(actor, action)
    }
}

pub type ActorIdInnerSupplyChainAction = (ActorId, InnerAction);
```

## Source code

The source code of this example of a supply chain smart contract and an implementation of its testing is available on [GitHub](https://github.com/gear-dapps/supply-chain). They can be used as is or modified to suit your own scenarios.

For more details about testing smart contracts written on Gear, refer to the [Program Testing](/docs/developing-contracts/testing) article.
