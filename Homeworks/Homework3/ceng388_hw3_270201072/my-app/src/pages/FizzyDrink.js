/*Fizzy Drink menu page*/
import '../index.css';
import { useState } from "react";
import fizzy_drink from './menu_pictures/fizzy_drink.jpg';
import ItemDetailBox from '../ItemDetailBox';
import Header from '../MenuPageHeader';
import Footer from '../MenuPageFooter';

/*Fizzy Drink Page component*/
function FizzyDrink({basketTotal, setBasketTotal, ItemName, setItemName, ItemType, setItemType, ItemQuantity, setItemQuantity, ItemPrice, setItemPrice, setBasket}) {  

  const [notPurpleContactInfo, setPurpleContactInfo] = useState(true);	
  const [notPurpleLocationInfo, setPurpleLocationInfo] = useState(true);
  
  /*item values to be displayed in menu*/ 
  setItemName("Fizzy Drink");
  const itemPriceActual = "20 TL";
  const itemOptions = ["Cola (+0 TL)","Fanta (+0 TL)","Sprite (+0 TL)"]; 
  
  return ( 
    <div> 
     <div>
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <Header basketTotal={basketTotal} />  
     </div>  
       
       <ItemDetailBox 
          basketTotal={basketTotal}
          ItemName={ItemName}
          setItemName={setItemName}
          ItemPriceActual={itemPriceActual}
          ItemPrice={ItemPrice}
          setItemPrice={setItemPrice}
          ItemType={ItemType}
          setItemType={setItemType}
          ItemQuantity={ItemQuantity}
          setItemQuantity={setItemQuantity}
          ItemImage={fizzy_drink}
          ItemOptions={itemOptions}   
          setBasketTotal={setBasketTotal}  
          setBasket={setBasket}          
        />
         
       <div>
        <Footer contactInfo={notPurpleContactInfo} 
         locationInfo={notPurpleLocationInfo} 
         setcontactInfo={setPurpleContactInfo}
         setlocationInfo={setPurpleLocationInfo}/>
       </div>  
     </div>
  
  );
}


export default FizzyDrink;










