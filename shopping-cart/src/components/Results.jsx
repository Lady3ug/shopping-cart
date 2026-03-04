export default function Results({ income, expenses, savingsGoal }) {
  const monthlySavings = income - expenses;

  if (monthlySavings <= 0) {
    return <p>Expenses are higher than income. Adjust your budget.</p>;
  }

  const monthsToGoal = Math.ceil(savingsGoal / monthlySavings);

  return (
    <div>
      <p>Monthly Savings: ${monthlySavings}</p>
      <p>Time to reach goal: {monthsToGoal} months</p>
    </div>
  );
}
