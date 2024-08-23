import './index.css';

/*Basket Item component*/
export default function BasketItem({ItemName, ItemType, ItemQuantity, ItemPrice}) {
       return (    
        <div>
            <div className="Basket-itemName">{ItemName}</div>
            <div className="Basket-itemOption">{ItemType}</div>
            <div className="Basket-itemQuantity">Quantity: {ItemQuantity}</div>
            <div className="Basket-itemPrice">{ItemPrice} TL</div>
            <br />
        </div>   
       );
} 

