import { useState } from "react";

export default function Form({ onAddItem }) {
    const [description, setDescription] = useState(" ");
    const [option, setOption] = useState(1);


    function handleSubmit(e) {
        e.preventDefault();
        if (!description.trim()) return;

        const newItem = { description, option, packed: false, id: Date.now() };
        // console.log(newItem);
        onAddItem(newItem);

        setDescription("");
        setOption(1);
    }

    return <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select value={option} onChange={(e) => {
            // console.log(Number(e.target.value))
            setOption(Number(e.target.value));
        }}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (<option value={num} key={num}>{num}</option>))}
        </select>
        <input type="text" placeholder="items..." value={description} onChange={(e) => {
            setDescription(e.target.value);
        }} />
        <button>ADD</button>
    </form>;
}
