export default function Stats({ item }) {
    if (item.length === 0)
        return (<p className="stats"><em>Start adding some items to see your packing list🚀</em></p>);


    const NumItems = item.length;
    const Packed = item.filter(item => item.packed).length;
    const Percentange = Math.round(Packed / NumItems * 100);
    return <footer className="stats">
        <em>{Percentange === 100 ? "💼 You have got everything covered. Let's GO!!✈️" : `You have ${NumItems} items on your list, and you already packed ${Packed}  (${Percentange}%)`}</em>
    </footer>;
}
