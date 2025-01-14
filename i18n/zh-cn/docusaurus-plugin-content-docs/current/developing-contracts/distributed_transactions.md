---
sidebar_label: 一致性和可靠性
sidebar_position: 8
---

# 确保异步调度的可靠性

Gear Protocol 的关键特性之一是使用 Actor 模型进行消息传递通信。Actor 模型框架支持异步消息传递和并行计算，这极大地提高了 dapp 的可实现速度和可伸缩性。在 Actor 模型中，程序不共享状态，而是通过消息相互通信。如果一个程序向另一个程序发送异步消息，它必须等待另一个程序的回复，然后才能继续进行下一个操作。

当一个程序与另一个程序进行交互时，交易就变成了“分布式”。分布式交易是在多个数据库中执行的一组操作，或者在 Gear Protocol 的情况下，在具有自己状态的多个 actor 之间执行。分布式交易必须拥有这些属性：
- 原子性--所有数据更改都被视为单个操作。也就是说，要么进行所有修改，要么不进行任何修改；
- 一致性 —— 这个属性意味着当一个交易开始和结束时，数据的状态是一致的。

例如，以太坊区块链上的交易是原子性的，这意味着如果交易由于错误而失败，它对全局状态的所有影响都将回滚，就像交易从未发生过一样。许多区块链应用程序依赖于交易的原子性，但当使用以太坊上的编程范式构建异步应用程序时，这可能是一个问题，因为你可能会遇到交易失败后无法恢复程序状态的问题。

考虑一个简单的代币互换，用户想用代币 A 互换流动性池中的代币 B。互换合约将向代币 A 合约发送一条消息，向代币 B 合约发送一条消息。如果这些消息中的一个成功，而另一个由于某种原因失败，那么代币 A 合约的状态将被改变，而代币 B 合约的状态将保持不变。这可能导致数据状态的不一致，并使其难以从失败的交易中恢复。因此，考虑实现分布式交易的不同编程范式是很重要的。

让我们使用代币互换的例子来看一下不同的编程方法。

## 将代币互换交易拆分为 3 个独立交易

考虑以下情况：我们有一个由代币 A 和代币 B 组成的流动资金池，也有一个用户想用他的代币 A 换取代币 B。

`第1步`：用户向互互换合约发送一个 `MakeOrder` 消息。在该交易中，该合约向同质化代币合约发送一条消息。执行该消息的结果可能成功或失败。最坏的情况是在处理代币合约中的消息时，或在随后执行互换合约时，缺少 gas。然而，由于代币合约支持幂等性，用户可以简单地重启交易并完成交易。

![img alt](./img/1.step1.png#gh-light-mode-only)
![img alt](./img/1.step1-dark.png#gh-dark-mode-only)

`第2步`：用户向互换合约发送一个 `ExecuteOrder` 消息。互换合约只是计算用户将收到的代币数量，并保存流动性资金池的最新状态。

![img alt](./img/1.step2.png#gh-light-mode-only)
![img alt](./img/1.step2-dark.png#gh-dark-mode-only)

`第3步`：用户向互换合约发送一个`Withdraw`消息，并收到代币 B。

![img alt](./img/1.step3.png#gh-light-mode-only)
![img alt](./img/1.step3-dark.png#gh-dark-mode-only)

在一个交易中执行一个互换是可能的。为了解决原子性问题，我们可以在这里使用以下模式：
- `2 PC -- 2阶段提交协议`（还有其扩展--3 阶段提交协议）;
- `Saga 模式`。

## 两阶段提交协议

**理论** ：
我们有一个向参与者发送消息的协调器。`两阶段提交协议` 有两部分：`prepare` 阶段和 `commit` 阶段。

**准备阶段：**：
在准备阶段，协调器和参与者执行以下对话：

- `Coordinator`：

协调器指示每个参与的数据库服务器预提交交易。

- `Participants`：

每个参与者都会通知协调器，它是否可以提交其交易分支。

- `Coordinator`：

协调器根据每个参与者的响应，决定是提交还是回滚交易。只有当所有参与者都表明他们可以提交到他们的交易分支时，它才会决定提交。如果任何参与者表示它还没有准备好提交到它的交易分支（或者如果它没有响应），协调器决定结束全局交易。

**提交阶段：**

在提交阶段，协调器和参与者进行以下对话：

- `Coordinator`：

协调器将提交记录或回滚记录写入协调器的逻辑日志，然后指示每个参与者提交或回滚交易。

- `Participants`：

如果协调器发出了一个提交消息，参与者通过向逻辑日志写入提交记录来提交交易，然后向协调器发送一个确认交易被提交的消息。如果协调器发出回滚消息，参与者回滚交易，但不向协调器发送确认。

- `Coordinator`：

如果协调器发出消息提交交易，它将等待收到每个参与者的确认，然后再结束全局交易。如果协调器发出消息要回滚交易，它就不等待参与者的确认。

让我们看看如何在代币互换合约的例子中使用它。我们考虑以下情况：账户想用他的代币（我们称之为代币 A）互换其他代币（代币 B），使用互换合同中的流动性池。

在这种情况下，互换合同是一个协调器合约，而代币合约是参与者。

互换合约会做以下步骤：

**准备阶段**

- `Swap contract`：

互换合约向代币合约发送消息，准备转移代币（消息可以并行发送）。事实上，代币合约在这个阶段必须锁定资金。

- `Token contract`：

代币合约进行所有必要的检查，在成功的情况下，锁定资金并回复互换合约，说他们已经准备好进行交易了。

- `Swap contract`：

互换合约处理来自代币合约的消息，并决定是否提交或中止全局交易。
接收代币 B，这里的情况与第一步相同。

![img alt](./img/2.prepare.png#gh-light-mode-only)
![img alt](./img/2.prepare-dark.png#gh-dark-mode-only)

**提交阶段**

- `Swap contract`：

如果代币合约确认他们已准备好执行交易，则互换合约会向他们发送一条消息以提交状态。否则，互换合约会告诉他们中止交易。

- `Token contract`：

代币合约最终改变它们的状态并发送对互换合约的回复；

- `Swap contracts`：

互换合约处理来自代币合约的消息并保存有关交易执行的结果。

![img alt](./img/2.commit.png#gh-light-mode-only)
![img alt](./img/2.commit-dark.png#gh-dark-mode-only)

当然，所有工作流都会处理消息执行期间 gas 耗尽的情况。

`Pros`：优点
- 消息可以并行发送；
- 如果考虑到缺少 gas 的情况，则可以实现数据一致性。

`Cons`：缺点
- 参与者必须等待协调器的消息，他们不能自己提交或中止；
- 协调器起着重要的作用：如果它未能发送消息，那么所有参与者都会进入阻塞状态（在我们的示例中：代币合约中的资金被阻塞）。

## 三阶段提交协议

**理论**：它类似于两阶段提交协议，但它试图解决阻塞参与者状态的问题，并为参与者提供自行恢复状态的机会。

**准备阶段**：

这里遵循两阶段提交协议的相同步骤：

- `Coordinator`：
协调器向所有参与者发送准备消息并等待回复；

- `Participants`：
如果参与者准备好提交交易，他们会发送就绪消息，否则他们不会向协调器发送消息。

- `Coordinator`：
根据回复，协调器决定是否进入下一个状态。如果任何参与者没有响应消息或如果任何参与者未能在定义的时间内响应，协调器将向每个参与者发送中止消息。强调与两阶段提交协议的区别很重要：
   - 协调器限制参与者的响应时间。我们可以通过发送一条消息来实现这一点，其中包含指定的气体量或协调器准备等待的指定块数；
   - 如果协调器在此状态下失败，则参与者可以使用延迟消息中止交易（即解锁他们的状态）。因此，在那个阶段，超时情况会中止。

**预提交阶段**：
- `Coordinator`：
协调器向所有参与者发送一条预提交消息并得到每个人的确认；

- `Participants`：
收到预提交消息，参与者知道一致决定提交。正如在准备阶段已经提到的，如果参与者未能及时收到此消息，则它会中止。但是，如果参与者收到中止消息，则它可以立即中止交易。

可能的问题：协调器在向参与者发送预提交时失败。所以一些参与者处于第 2 阶段，其他参与者处于第 1 阶段。这是一场灾难，因为第 1 组将提交，第 2 组将在超时的情况下中止。
所以我们必须确保如果其中一个参与者收到了预提交消息，他们都可以提交。如果协调器挂掉，处于第 2 阶段的任何参与者都可以自己成为协调器并继续交易。

- `Coordinator`：
收到所有参与者的确认后，协调器进入下一阶段。

三阶段提交协议完成两件事：

1. 允许使用 `recovery coordinator`（它可以是启动新交易的协调器本身，也可以是参与者）。如果协调器挂掉，恢复协调员可以查询参与者。

   - 如果发现参与者处于第 2 阶段，则意味着每个参与者都已完成第 1 阶段并对结果进行投票。第 1 阶段的完成是有保证的。一些参与者可能已经收到提交请求（第 3 阶段）。恢复协调器可以在第 2 阶段安全地恢复。
   - 如果参与者处于阶段 1，则意味着没有参与者开始提交或中止。该协议可以从头开始。
   - 如果参与者处于第 3 阶段，协调者可以继续第 3 阶段——并确保每个人都收到提交/中止请求

2. 现在每个阶段都可以超时——没有像两阶段提交协议那样的无限期等待。
   - `Phase 1`:
如果参与者没有及时收到协调员的消息，它就会中止；
如果没有收到任何参与者的消息，协调器会向所有参与者发送中止消息。
   - `Phase 2`:
如果参与者等待协调器超时，则选举新的协调器。

让我们再回到互换合约。

**准备阶段**：

以下情况都有可能：
- 所有代币合约都收到消息；
- 互换合约无法等待任何代币合约的响应
- 互换合约本身失败。

在失败的情况下，如果交易没有重新开始，互换合约将不会进入第二阶段，代币合约将使用延迟消息解锁它们的状态。

![img alt](./img/3.prepare.png#gh-light-mode-only)
![img alt](./img/3.prepare-dark.png#gh-dark-mode-only)

**预提交阶段**：

在这个阶段，我们可能会因为缺少 gas 而导致互换合约或代币合约失败。为了解决这个问题，我们可以使用 gas 预留，如下所示：

- 掉期合约在其`handle_signal`中接收到有关错误的信息；
- 使用 gas 预留（因此，之前有必要关心 gas 预留），互换合约向自己发送消息，以从第 2 阶段重新开始交易。（同样的逻辑也可以用在`准备阶段`）。

![img alt](./img/3.precommit.png#gh-light-mode-only)
![img alt](./img/3.precommit-dark.png#gh-dark-mode-only)

**提交阶段**：

与前一阶段一样，我们只能因缺少 gas 而失败。在这里它不是那么重要，因为在这个阶段所有参与者都可以做出承诺。

## Saga 模式

**理论**：

`saga` 是一系列本地事务的序列。每个本地事务更新数据库并发布消息或事件以触发 saga 中的下一个本地事务。如果本地事务因为违反业务规则而失败，则 saga 会执行一系列补偿事务，以撤消先前本地事务所做的更改。因此，Saga 由多个步骤组成，而 `2PC` 就像一个请求。

有两种协调 sagas 的方式：

- `Choreography` - 每个本地事务都会发布触发其他服务中本地事务的域事件；

- `Orchestration` - 协调器（对象）告诉参与者要执行哪些本地事务。

我们将考虑`orchestration based Saga`，其中将有一个编排器（互换合约）从一个中心管理整个操作。

互换操作包括以下步骤：

1. 互换合约收到消息，兑换流动性池中的代币。因此，它必须将代币 A 从帐户转移到其地址，然后再将代币 B 转移给用户。
2. 它创建了第 1 个任务：将代币从用户转移到掉期合约。它还为第一个任务创建补偿交易：将代币从掉期合约转移回用户。第二个任务是将代币从掉期合约转移给用户。
3. 它开始执行第 1 个任务。如果执行失败，它会取消交易。如果成功，掉期合约执行第二个任务；
4. 如果第 2 个任务执行成功，则交易完成。否则，交换合约执行第一个任务的补偿交易。

![img alt](./img/saga.png#gh-light-mode-only)
![img alt](./img/Saga-dark.png#gh-dark-mode-only)

需要注意的是，补偿性交易不应由于任何逻辑错误而失败。它们只能由于缺乏气体而失败。如果发生这种情况，那么你需要再次重启交易或使用 gas 保留。代币合约的`idempotency`保证了交易将被完成到最后，不会出现重复交易。
