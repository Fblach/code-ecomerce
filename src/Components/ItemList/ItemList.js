import ItemCard from '../ItemCard/ItemCard'

const ItemList = ({items}) => {
    return (
        <div>
           {items.map((item) => {
                return <ItemCard key={items.id} item={item} />;
    })}           
        </div> 
    );
};

export default ItemList