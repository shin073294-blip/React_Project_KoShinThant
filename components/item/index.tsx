import Card from "../card"
export type Item = {
    id: number,
    name: string,
    category: string,
    price: number,
    inStock: boolean,
    rating: number
}

type ItemProp = {
    item: Item
}

export default function Item({ item }: ItemProp) {
    const { id, name, category, price, inStock, rating } = item
    return (
        <Card>
            <span className={`${ inStock ? "" : 'line-through' }`}>Name: {name}</span>
            <span>Category: {category}</span>
            <span>Price: {price}</span>
            <span>Rating: {rating}</span>
        </Card>
    )
}