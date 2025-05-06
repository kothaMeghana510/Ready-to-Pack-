import { useState } from "react";
import Stats from "./Stats";
import Form from "./Form";
import Logo from "./Logo";
import Packlist from "./Packlist";

export default function App() {

  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItems(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }

  function handleCheckBox(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item));
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to clear the List?');
    if (confirmed) setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form addItems={handleAddItems} />
      <Packlist items={items} deleteItems={deleteItems} handleCheckBox={handleCheckBox} handleClearList={handleClearList} />
      <Stats items={items} />
    </div>
  );
}





