function TransactionItem({ transaction }) {
  return (
    <div className="transaction-item">
      <h3>{transaction.description}</h3>
      <p>Amount: ${transaction.amount}</p>
      <p>Category: {transaction.category}</p>
      <p>Status: {transaction.status}</p>
    </div>
  );
}

export default TransactionItem;