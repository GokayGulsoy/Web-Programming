import { useState } from "react"
import BasketItem from  './BasketItem';

/*ItemDetailsBox Component*/
export default function ItemDetailBox({basketTotal, setBasketTotal, ItemPriceActual, ItemName, setItemName, ItemType, setItemType, ItemQuantity, setItemQuantity, ItemPrice, setItemPrice, ItemImage, ItemOptions, setBasket}) {
    // useState Hook to keep track of selected option for menu item
    const [type,setType] = useState("");
    
    const onMenuAdd = () => {
         
          let newBasketTotal;
          let newQuantity = 1 + Math.floor(Math.random() * 2)
          setItemQuantity(newQuantity);
          let newPrice; 
          //setItemQuantity(1 + Math.floor(Math.random() * 2));
          if (ItemName === "French Fries") {
             console.log("We are here!");
             // there are three options
             if (type === "Small Size (+0 TL)") {
                 setItemType("Small Size (+0 TL)");
                 newPrice = newQuantity * 25;
                 setItemPrice(newPrice);                
             }
              
             else if (type === "Medium Size (+10 TL)") {
                     setItemType("Medium Size (+10 TL)"); 
                     newPrice = newQuantity * 35;
                     setItemPrice(newPrice);
             }
             
              else if (type === "Large Size (+20 TL)") {
                     setItemType("Large Size (+20 TL)"); 
                     newPrice = newQuantity * 45;
                     setItemPrice(newPrice);
             } 
          }
          
          else if (ItemName === "Fizzy Drink") {
                // there are three options
             if (type === "Cola (+0 TL)") {
                 setItemType("Cola (+0 TL)");
                 newPrice = newQuantity * 20;
                 setItemPrice(newPrice);                  
             }
              
             else if (type === "Fanta (+0 TL)") {
                     setItemType("Fanta (+0 TL)"); 
                     newPrice = newQuantity * 20;
                     setItemPrice(newPrice);
             }
             
              else if (type === "Sprite (+0 TL)") {
                     setItemType("Sprite (+0 TL)"); 
                     newPrice = newQuantity * 20;
                     setItemPrice(newPrice);
             }    
          }
          
          else if (ItemName === "Onion Rings") {
                // there are two options
             if (type === "Single Portion (+0 TL)") {
                 setItemType("Single Portion (+0 TL)");
                 newPrice = newQuantity * 30;
                 setItemPrice(newPrice);                  
             }

              else if (type === "Double Portion (+15 TL)") {
                     setItemType("Double Portion (+15 TL)"); 
                     newPrice = newQuantity * 45;
                     setItemPrice(newPrice);
             }    
          }
          
          else if (ItemName === "Cheeseburger") {
                // there are two options
             if (type === "No Extra Cheese (+0 TL)") {
                 setItemType("No Extra Cheese (+0 TL)");
                 newPrice = newQuantity * 70;
                 setItemPrice(newPrice);                  
             }
              
             else if (type === "Add Extra Cheese (+20 TL)") {
                     setItemType("Add Extra Cheese (+20 TL)"); 
                     newPrice = newQuantity * 90;
                     setItemPrice(newPrice);
             }   
          }
          
           else if (ItemName === "Soft Serve IceCream") {
                // there are four options
             if (type === "Vanilla (+0 TL)") {
                 setItemType("Vanilla (+0 TL)");
                 newPrice = newQuantity * 15;
                 setItemPrice(newPrice);;                  
             }
             
              else if (type === "Chocolate (+0 TL)") {
                     setItemType("Chocolate (+0 TL)"); 
                     newPrice = newQuantity * 15;
                     setItemPrice(newPrice);
             }
              
             else if (type === "Strawberry (+5 TL)") {
                     setItemType("Strawberry (+5 TL)"); 
                     newPrice = newQuantity * 20;
                     setItemPrice(newPrice);
             }   
             
               else if (type === "Mint (+10 TL)") {
                     setItemType("Mint (+10 TL)"); 
                     newPrice = newQuantity * 25;
                     setItemPrice(newPrice);
             } 
          }  
          
          else if (ItemName === "Chicken Burger") {
                // there are no options
                setItemType("Standard");
                newPrice = newQuantity * 60;
                setItemPrice(newPrice); 
          } 
          
           else if (ItemName === "Water") {
                // there are no options
                setItemType("Standard");
                newPrice = newQuantity * 10;
                setItemPrice(newPrice);   
          } 
          
           else if (ItemName === "Beef Burger") {
                // there are no options
                setItemType("Standard");
                newPrice = newQuantity * 90;
                setItemPrice(newPrice);   
          } 
          
          else if (ItemName === "Chicken Legs") {
                // there are no options
                setItemType("Standard");
                newPrice = newQuantity * 45;
                setItemPrice(newPrice);   
          }
          
          else if (ItemName === "Lemonade") {
                // there are no options
                setItemType("Standard");
                newPrice = newQuantity * 13;
                setItemPrice(newPrice);   
          }
          
          else if (ItemName === "Pizza Slice") {
                // there are no options
                setItemType("Standard");
                newPrice = newQuantity * 50;
                setItemPrice(newPrice);   
          }    
          
          let newItem; 
          if (type === "") {
             const standardMenu = "Standard";
             newItem = (<BasketItem ItemName={ItemName} ItemType={standardMenu} ItemQuantity={newQuantity} ItemPrice={newPrice} />);
             setBasket(newItem);
            
          }
          
          else {
            newItem = (<BasketItem ItemName={ItemName} ItemType={type} ItemQuantity={newQuantity} ItemPrice={newPrice} />);
            setBasket(newItem);
          }
          
          
          // updating the basketTotal
          newBasketTotal = basketTotal + newPrice
          setBasketTotal(newBasketTotal);           
    }
      
    const onTypeChange = e => {
          setType(e.target.value);
          console.log(type);
    }
    
    let items = ItemOptions;
     
     if (items.length === 1) {
         items = ItemOptions.map((item) => 
             <div className="SingleItem">{ItemName}<div className="SingleItemPrice">{ItemPriceActual}</div></div>
         );
     }
     
     else {
        items = ItemOptions.map((item) => 
        <div className="Item">
           <input type="radio" name="items" value={item} onChange={onTypeChange} />
           <label style={{paddingLeft: 15}}>{item}</label>
        </div>
        );
     } 

  return (
   <div style={{paddingBottom: 50}}>
     <div className="ItemDetailBox">
       <div className="ItemDetailBoxText"> 
        {ItemName}
       </div> 
       <div className="ItemPrice">
         {ItemPriceActual}
       </div>
       <div>
        <img src={ItemImage} alt={ItemName} className="ItemBoxImage"/>
       </div>
     </div>
     <div className="SelectionBox"> 
       <div className="ItemOptions">
          {items}
          <button className="Add-to-Basket" onClick={onMenuAdd}>
          Add to Basket
          </button>
       </div>  
     </div>    
   </div>   
   );   
}

