export default function Item({ item, delItem, toggle }) {
    return <li>
        <input type="checkbox" value={item.packed} onChange={() => toggle(item.id)} />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.description}  {item.quantity}
        </span>
        <button onClick={() => delItem(item.id)}>❌</button>
    </li>;
}
