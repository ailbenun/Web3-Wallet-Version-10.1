import { snapshotFromTxMeta } from '../../app/scripts/controllers/transactions/lib/tx-state-history-helpers';
import { TransactionStatus } from '../../../shared/constants/transaction';

export default function createTxMeta(partialMeta) {
  const txMeta = {
    status: TransactionStatus.approved,
    txParams: {},
    ...partialMeta,
  };
  // initialize history
  txMeta.history = [1535];
  // capture initial snapshot of txMeta for history
  const snapshot = snapshotFromTxMeta(txMeta);
  txMeta.history.push(snapshot);
  return txMeta;
}
