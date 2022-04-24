---
sidebar_label: 'Multi Token'
sidebar_position: 5
---

# Multi Token

## Introduction

A standard interface for contracts that manage multiple token types. A single deployed contract may include any combination of fungible tokens, non-fungible tokens or other configurations (e.g. semi-fungible tokens).

The idea is simple and seeks to create a smart contract interface that can represent and control any number of fungible and non-fungible token types. In this way, the Multi Token token (further MTK) can do the same functions as an ERC-20 and ERC-721 token, and even both at the same time.

## Interface


### Metadata
Since MTK deals with non-fungible tokens as well, there is a way to provide metadata while minting tokens. The metadata struct is shown below and it is used in `mint` and `mint_batch` methods.
```rust
#[derive(Debug, Decode, Encode, TypeInfo, Default, Clone)]
pub struct TokenMetadata {
    pub title: Option<String>,
    pub description: Option<String>,
    pub media: Option<String>,
    pub reference: Option<String>,
}
```
### Events

```rust
// `TransferSingle` MUST emit when tokens are transferred, including zero value transfers as well as minting or burning
TransferSingleReply {
    operator: ActorId,
    from: ActorId,
    to: ActorId,
    id: u128,
    amount: u128,
}

// `TransferBatch` MUST emit when tokens are transferred, including zero value transfers as well as minting or burning
TransferBatch {
    operator: ActorId,
    from: ActorId,
    to: ActorId,
    ids: Vec<u128>,
    values: Vec<u128>,
}

// MUST emit when approval for a second party/operator address to manage all tokens for an owner address is enabled or disabled (absence of an event assumes disabled)
Approve {
    from: ActorId,
    to: ActorId,
}
```

### Functions
Note: in every fuction `TokenId` is an alias for `u128`.
```rust
// Mint specific tokens to a specific user balance, and MUST emit the TransferSingle event
fn mint(&mut self, account: &ActorId, id: &TokenId, amount: u128, meta: Option<TokenMetadata>);

// Mint multiple tokens a user's balance, and MUST emit the TransferBatch event
fn mint_batch(
    &mut self,
    account: &ActorId,
    ids: &[TokenId],
    amounts: &[u128],
    meta: Vec<Option<TokenMetadata>>,
);

// Burn the specified amount of tokens from a user's balance, and MUST emit the TransferSingle event
fn burn(&mut self, id: &TokenId, amount: u128);

// Burns multiple tokens from a user's balance, and MUST emit the TransferBatch event
fn burn_batch(&mut self, ids: &[TokenId], amounts: &[u128]);

// Get the balance of an account's tokens
fn balance_of(&self, account: &ActorId, id: &TokenId) -> u128;

// Get the balance of multiple account/token pairs
fn balance_of_batch(&self, accounts: &[ActorId], ids: &[TokenId]) -> Vec<BalanceOfBatchReply>;

// Enable approval for a third party ("operator") to manage all of the caller's tokens, and MUST emit the Approve event
fn approve(&mut self, to: &ActorId);

// Disable approval for a third party ("operator") to manage all of the caller's tokens, and MUST emit the Approve event
fn revoke_approval(&mut self, to: &ActorId);

// Transfers amount of tokens from address to other address, and MUST emit the TransferSingle event
fn transfer_from(&mut self, from: &ActorId, to: &ActorId, id: &TokenId, amount: u128);

// Transfers  multiple type amount of tokens from address to other address, and MUST emit the TransferBatch event
fn fn batch_transfer_from(
    &mut self,
    from: &ActorId,
    to: &ActorId,
    ids: &[TokenId],
    amounts: &[u128],
);
```

### Init Config

```rust
pub struct InitConfig {
    pub name: String,
    pub symbol: String,
    pub base_uri: String,
}
```

### `Action` Structure

```rust
#[derive(Debug, Decode, Encode, TypeInfo)]
pub enum ERC1155Action {
    Mint(ActorId, TokenId, u128, Option<TokenMetadata>),
    BalanceOf(ActorId, TokenId),
    BalanceOfBatch(Vec<ActorId>, Vec<TokenId>),
    MintBatch(ActorId, Vec<u128>, Vec<TokenId>, Vec<Option<TokenMetadata>>),
    TransferFrom(ActorId, ActorId, TokenId, u128),
    BatchTransferFrom(ActorId, ActorId, Vec<TokenId>, Vec<u128>),
    Burn(TokenId, u128),
    BurnBatch(Vec<TokenId>, Vec<u128>),
    Approve(ActorId),
    RevokeApproval(ActorId),
}
```

### `Event` Structure

```rust
pub enum ERC1155Event {
    TransferSingle(TransferSingleReply),
    Balance(u128),
    BalanceOfBatch(Vec<BalanceOfBatchReply>),
    MintOfBatch(Vec<BalanceOfBatchReply>),
    TransferBatch {
        operator: ActorId,
        from: ActorId,
        to: ActorId,
        ids: Vec<TokenId>,
        values: Vec<u128>,
    },
    Approve {
        from: ActorId,
        to: ActorId,
    },
}

#[derive(Debug, Decode, Encode, TypeInfo)]
pub struct TransferSingleReply {
    pub operator: ActorId,
    pub from: ActorId,
    pub to: ActorId,
    pub id: u128,
    pub amount: u128,
}

#[derive(Debug, Encode, Decode, TypeInfo)]
pub struct BalanceOfBatchReply {
    pub account: ActorId,
    pub id: u128,
    pub amount: u128,
}
```

## Conclusion

A source code of the contract example provided by Gear is available on GitHub: [`erc1155/src/lib.rs`](https://github.com/gear-tech/apps/blob/master/erc1155/src/lib.rs).

See also an example of the smart contract testing implementation based on gtest: [`erc1155/tests/tests.rs`](https://github.com/gear-tech/apps/blob/master/erc1155/tests/tests.rs).

For more details about testing smart contracts written on Gear, refer to this article: [Program testing](https://wiki.gear-tech.io/developing-contracts/testing).