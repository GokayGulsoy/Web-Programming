/*Cheeseburger menu page*/
import '../index.css';
import { useState } from "react";
import cheeseburger from './menu_pictures/cheeseburger.jpg';
import ItemDetailBox from '../ItemDetailBox';
import Header from '../MenuPageHeader';
import Footer from '../MenuPageFooter';

/*Cheeseburger Page component*/
function Cheeseburger({basketTotal, setBasketTotal, ItemName, setItemName, ItemType, setItemType, ItemQuantity, setItemQuantity, ItemPrice, setItemPrice, setBasket}) {

  const [notPurpleContactInfo, setPurpleContactInfo] = useState(true);	
  const [notPurpleLocationInfo, setPurpleLocationInfo] = useState(true);
  
  /*item values to be displayed in menu*/ 
  setItemName("Cheeseburger");
  const itemPriceActual = "70 TL";
  const itemOptions = ["No Extra Cheese (+0 TL)","Add Extra Cheese (+20 TL)"]; 
  
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
          ItemImage={cheeseburger}
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


export default Cheeseburger;

