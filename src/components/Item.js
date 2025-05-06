export default function Item({ item, deleteItems, handleCheckBox }) {
  return (
    <div className="item">
      <li>
        <input type='checkbox' onClick={() => handleCheckBox(item.id)} />
        <span style={item.packed ? { textDecoration: "line-through", color: '#708090', marginLeft: '0.5em' } : {}}> {item.number}{item.itemName}</span>
        <button className="close-button" onClick={() => deleteItems(item.id)}><i className="fa-solid fa-square-xmark"></i></button>
      </li>
    </div>
  );
}
