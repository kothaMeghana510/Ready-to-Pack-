import { useState } from "react";

export default function Form({ addItems }) {

  const [itemName, changeItemName] = useState("");
  const [number, setNumber] = useState(1);


  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      number,
      itemName,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);

    addItems(newItem);
    setNumber(1);
    changeItemName(" ");
  }


  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>What are you packing</h2>
      <select value={number} onChange={(e) => setNumber(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (<option value={num} key={num}>{num}</option>))}
      </select>
      <input placeholder="Enter Items to Pack" type="text" value={itemName} onChange={(e) => changeItemName(e.target.value)}></input>
      <button className="add">ADD</button>
    </form>
  );
}
