import Item from "./Item.js";

export default function Packlist({ items, deleteItems, handleCheckBox, handleClearList }) {
  items = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div>
      <div className="packlist">
        <ul>
          {items.map((item) => <Item item={item} key={item.id} deleteItems={deleteItems} handleCheckBox={handleCheckBox} />)}
        </ul>
      </div>

      {items.length === 0 ? '' : <div className="clearList">
        <button className="add clearButton" onClick={handleClearList}>Clear List</button>
      </div>}
    </div>
  );
}
