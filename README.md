
# Pumpfun VolumeBot

Pump.fun Volume Bot — High-Performance Solana Trading & Volume Simulation Bot

A production-grade Pump.fun volume bot built on Solana, designed to simulate organic trading activity, increase on-chain volume, and support token launch momentum.

This bot features multi-wallet orchestration, randomized trading patterns, and low-latency execution to create realistic market behavior while maintaining efficiency and scalability.

Built for developers and traders looking to experiment with Pump.fun volume strategies, trading automation, and Solana bot infrastructure.

## Environment Variables

### Basic

| Variable | Value | Description |
| --- | --- | --- |
| `PRIVATE_KEY` | (your main wallet secret) | Private key for the main wallet |
| `RPC_ENDPOINT` |  | RPC endpoint for Solana |
| `RPC_WEBSOCKET_ENDPOINT` |  | RPC WebSocket endpoint for Solana |

### Buy Settings

| Variable | Value | Description |
| --- | --- | --- |
| `BUY_UPPER_PERCENT` | `60` | Higher percent limit of SOL that can be used to buy token in wallet |
| `BUY_LOWER_PERCENT` | `30` | Lower percent limit of SOL (e.g. `30` means it buys with more than 30% of SOL in wallet) |
| `BUY_INTERVAL_MAX` | `30` | Upper limit of seconds to wait after second buy |
| `BUY_INTERVAL_MIN` | `2` | Lower limit of seconds (waits from 2 to 30 secs after second buy before second buy) |

### Sell Settings

| Variable | Value | Description |
| --- | --- | --- |
| `SELL_INTERVAL_MAX` | `30` | Upper limit of seconds to wait after sell |
| `SELL_INTERVAL_MIN` | `3` | Lower limit of seconds (waits from 2 to 30 secs after sell to transfer SOL) |

### Volume Settings

| Variable | Value | Description |
| --- | --- | --- |
| `DISTRIBUTE_WALLET_NUM` | `4` | Number of wallets running in parallel to generate volume (max: 20) |
| `SLIPPAGE` | `50` | Slippage in percent |
| `TOKEN_MINT` | `7MFX5LySd9CdaD8irWnLLKanpDw6gxbBuhEg3qCHWc4C` | Mint address of token to increase volume |

## How to run
### 1. Clone the repository
```
git clone https://github.com/0xFives/Pumpfun-Volume-Bot.git
cd Pumpfun-Volume-Bot
```
### 2. Install dependencies
```
yarn install
```
### 3. Configure the environment variables

Rename the .env.copy file to .env and set RPC and WSS, main keypair's secret key and other variables.

### 4. Run the Volume Bot

```
yarn build
yarn start  // Start volume up
yarn gather // Gather the funs from distributed wallets
```

## PoW
Sol Distribution to 5 wallets Tx: https://solscan.io/tx/3zRYsSwjPymznKctTczrKpzpcFqGG1H2k3cALqdH2s6zvxE9F2bcpq2zvGF5FLGkqJMMeAYY3FMTWFet8XTvmme5

Buy Tx links:
- Wallet1 (675e3gLFYVqpCqhQaV4DeSa4Do7kNS4gbc2Pu4r2Cw6V):
https://solscan.io/tx/469KkyMZExA7JtfhNDCD5BUSHwViw5UsH3WnnYWQvqh7ahV9RX1GTSqW6koTfKB5gSXz4hgD6Dfp2PFCTjebWEz8
https://solscan.io/tx/PEYtd7jeYHWLDCd6qQsJPcsBANdfL1kGZx4W1ZoYLjVHN1Lh4pV7Rs1j84huU9zdSoBY8hMzFiDAmbjDWHRuqia
- Wallet2(Djw93dbbRnkeAoA9tL73wtfdaHR9Un4Mk9qYG6Uk7BPV):
https://solscan.io/tx/4KMCy5M5WDRoh2wurJZr2HsMWdrtJUaxq3KPoL2DsWi6AEVwdaJyyw22MEWqyRtGTRLvRv6wLS2mHga4u1X8Gnd3
https://solscan.io/tx/47BQTWvDdioqhy6e3Tk8odfqJnjat7pPnHqq667wkgHuwLLFBnGs5SfwTsFaqne92LSKXZvxRFMY3gYGR6cvTdVc
- Wallet3(6FPpQKhGoe2TC5fob7PuvpM2yVRsdDnztaFxpedqYbpW):
https://solscan.io/tx/26pKEmQwf3HduYmnjQJPFvKzXBQdPz12iYyhAsRTWwkzN6fAgaBm52edmA78BbNtiujWyihXdXYdcg3tyhNFSkTi
https://solscan.io/tx/4TiyKV67qz5KNe3931jYVQGE8Gdr4XianrYbC4NPvDMD9mUjF7YGEfD3eYTRjfwnx2zrQoSAgxo1ZDCJej7GXzt
- Wallet4(2kSpVibwRim6svP79VYLFXLTKLbFktTkLRfYtrbZixvW):
https://solscan.io/tx/5oUKn2ozVFq4ecs4A2KSXHhDGwaojGhWkn9LVjwg147J9wVCJrMEYx3M4FAb9gK6amoxPy4HJjwrVB5qHYM4Z2sb
https://solscan.io/tx/3EPnhVB1uAhUuGT84SKoFU1EBVc8H4P6GTicEo6qSov1ZR5mUBWuLpf7kkozsdH7HmsjYbmqZxS47FQRVszNjoCQ
- Wallet5(6DTAdTC9bKHNxhaMZBRHkWuJeVU9573yKn2ZahQ9AEU5):
https://solscan.io/tx/noMjqnh6UiYCs7vKm6MPKXECTWMQZi6hcka2DDvfhnD75B33asqudgMmKGo8A7CsGSDSoegEYHrTBSfQLfJtawU
https://solscan.io/tx/4uctpeX6AhYkppizVWCETfYTTV7648FbPuccV1KzutheV9uMYrkNeg97kaYv12yWkCmdC2mXbtuu7c2DTm79Gyef

Sell Tx links:
- Wallet1
https://solscan.io/tx/tzHZKqMswRosS33XciAn5LTxQPUivxeJyVa24ySU67gKNBwxfrWGqgh9MsXmffBzip9BeZegKYdWsAvh5LSzCAM
- Wallet2
https://solscan.io/tx/34nXWw3brgbYar1HyS8qVmtFi7ex6K2XURMjHiXmfXpQPo9jSZARCDoiD38YVN4DQ19Btu7wCE5nNEQK1qgJ1gvR
- Wallet3
https://solscan.io/tx/24pWDUdqkLhKmFQeRKYTYezv8R4qvX23kJn7SCLLmR9PaFEyy17DyK3LpWV1qtQnVfoTYYC34tecAPeX1cYDZ9P6
- Wallet4
https://solscan.io/tx/4ubescE2J3hXNKBaQ4ybszH7g8VdYJpqMi8APYkHNkdsdFTQfLnqGMkxRZAguTUP2wu5Dq1DokSBw9R72fyx4TGN
- Wallet5
https://solscan.io/tx/61AThqaFbx2Hi2pcdJMQcLn5sSeKptUnngGvdweyBeM3DyXWUVaFnxWPKHorfT2xvgbJuNiPPxM2JtJ6NrZvYNvp

Sol Gathered Tx links:
- Wallet1:
https://solscan.io/tx/667A8JoJcDWTH8P27YYUCNQJZZVC96HVZcp4oXd8B15TT7KSTJ7Eu52wtaC5acaqeiCHKv6Y5psgKZhdtZhRC5HX
- Wallet2:
https://solscan.io/tx/34nXWw3brgbYar1HyS8qVmtFi7ex6K2XURMjHiXmfXpQPo9jSZARCDoiD38YVN4DQ19Btu7wCE5nNEQK1qgJ1gvR
- Wallet3:
https://solscan.io/tx/3daQeQAfyC7jiWHHFcawsvXVWy6UVm6LfgWnJVo3ipHYbhVNNY5xMfQa1FxFxuYHAsrL69LrQp6r2dG5fqHhtmiN
- Wallet4:
https://solscan.io/tx/49tcs8R42CkkhcEFzt7Y69aFu1K8BUZuf1y9zDQs3VQRvWQxoT19aCNcDFaqscr6vewybob3TrHSnqmSpuVkL1sB
- Wallet5:
https://solscan.io/tx/4mbq5gbU6jKEr5sbxhRqcudoCdCHETGzwuFjutNwfQSGFp8xQccreRnHLYNaTrcNjb36haSk33RzmNarkvo2hjBH

## 👤 Author [oxlabs-five](https://t.me/oxylabs_five)
