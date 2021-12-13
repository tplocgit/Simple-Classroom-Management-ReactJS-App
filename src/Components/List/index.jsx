import Item from "../Item";

export default function List({ items }) {
    return (
        <div className="list">
            {items.map(item => <Item key={item.id} item={item} />)}
        </div>
    )
}