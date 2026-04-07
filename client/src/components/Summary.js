function Summary({ transactions }) {
    const totalAmount = transactions.reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);
    return (
        <div className="summary">
            <p>Total Amount: ${totalAmount.toFixed(2)}</p>
        </div>
    );
}

export default Summary;