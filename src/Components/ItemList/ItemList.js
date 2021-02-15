import ItemCard from '../ItemCard/ItemCard'

const ItemList = ({items}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
           {items.map((item) => {
                return <ItemCard key={items.id} item={item} />;
    })}           
        </div> 
    );
};

export default ItemList