import { useState } from "react";

export default function BudgetForm({ onSubmit }) {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [savingsGoal, setSavingsGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      income: parseFloat(income),
      expenses: parseFloat(expenses),
      savingsGoal: parseFloat(savingsGoal),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded shadow"
    >
      {/* Income */}
      <div className="mb-4">
        <label>Monthly Income</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
      </div>

      {/* Expenses */}
      <div className="mb-4">
        <label>Monthly Expenses</label>
        <input
          type="number"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
        />
      </div>

      {/* Savings Goal */}
      <div className="mb-4">
        <label>Savings Goal</label>
        <input
          type="number"
          value={savingsGoal}
          onChange={(e) => setSavingsGoal(e.target.value)}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
