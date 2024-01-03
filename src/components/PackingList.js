import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, delItem, toggle, clearList }) {
    const [sortby, setSortby] = useState("input");
    return (
        <div className="list">
            <ul>
                {items.map((item) => (<Item item={item} delItem={delItem} toggle={toggle} key={item.id} />))}
            </ul>
            <div>
                <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
                    <option value="input">Sort by input</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed</option>
                </select>
            </div>
            <button onClick={clearList}>Clear List</button>
        </div>
    );
}
