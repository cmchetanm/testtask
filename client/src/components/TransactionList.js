import TransactionItem from "./TransactionItem";

function TransactionList({ transactions }) {
  return (
    <div className="transaction-list">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

export default TransactionList;