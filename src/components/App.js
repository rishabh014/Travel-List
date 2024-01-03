// import e from "express";
// import e from "express";
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];
export default function App() {
  //Lifting state here in the common parent component
  const [item, setItem] = useState([])


  function handleAddItem(item) {
    setItem(items => [...items, item])
  }

  function handleDeleteItem(id) {
    setItem(items => items.filter((item) => item.id !== id))
  }

  function handleToggleItem(id) {
    setItem(items => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function clearList() {
    const confirmed = window.confirm("Are you sure want to delete all items?")

    if (confirmed) setItem([])
  }

  return <div className="app">
    <Logo />
    <Form onAddItem={handleAddItem} />
    <PackingList items={item} delItem={handleDeleteItem} toggle={handleToggleItem} clearList={clearList} />
    <Stats item={item} />
  </div>
}
