import { Connection, VersionedTransaction } from '@solana/web3.js';
import { RPC_ENDPOINT, RPC_WEBSOCKET_ENDPOINT } from '../constants';
import logger from '../logger/logger';

interface Blockhash {
  blockhash: string;
  lastValidBlockHeight: number;
}

export const execute = async (
  transaction: VersionedTransaction,
  latestBlockhash: Blockhash,
  isBuy: boolean | 1 = true,
) => {
  const solanaConnection = new Connection(RPC_ENDPOINT, {
    wsEndpoint: RPC_WEBSOCKET_ENDPOINT,
  });

  const signature = await solanaConnection.sendRawTransaction(transaction.serialize(), { skipPreflight: true });
  const confirmation = await solanaConnection.confirmTransaction({
    signature,
    lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
    blockhash: latestBlockhash.blockhash,
  });

  if (confirmation.value.err) {
    logger.error('Confirmation error:', confirmation.value.err);
    return '';
  } else {
    if (isBuy === 1) {
      return signature;
    } else if (isBuy) {
      logger.info(`Success in buy transaction: https://solscan.io/tx/${signature}`);
    } else {
      logger.info(`Success in Sell transaction: https://solscan.io/tx/${signature}`);
    }
  }
  return signature;
};
