import './index.css';

/*Basket Contents component*/
export default function BasketContents({ItemName, setItemName, ItemType, setItemType, ItemQuantity, ItemPrice, basketElements, setBasket}) {
      
      let newItem;
      
      let emptyItemName = ""; 
      let emptyItemType = "";
      setItemName(emptyItemName);
      setItemType(emptyItemType);
      
      console.log(basketElements);
       newItem =  basketElements.map((element) => 
             <>            
                 {element}
             </>
       );
      
     
       return (
          <div className="Basket-contents">
           {newItem}
          </div>  
       );
       
      
          
}
