export default function Stats({ items }) {
if (items.length === 0) return <p className="footer"><em>Start adding Items to you list 🤩</em></p>;

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);
  return (
    <footer className="footer">
      <em>
        {percentage === 100 ? "You got everything😁 Ready to go." : `You have ${numItems} items to pack in your list. you have packed ${numPackedItems} items (${percentage}%).`}
      </em>
    </footer>
  );
}
