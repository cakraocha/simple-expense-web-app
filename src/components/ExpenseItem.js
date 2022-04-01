import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Date (March 28th 2022)</div>
      <div className="expense-item__description">
        <h2>Title (Car Insurance)</h2>
        <div className="expense-item__price">Amount ($294.67)</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
