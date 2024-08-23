/*French Fries menu page*/
import '../index.css';
import { useState } from "react";
import french_fries from './menu_pictures/fries.jpg';
import ItemDetailBox from '../ItemDetailBox';
import Header from '../MenuPageHeader';
import Footer from '../MenuPageFooter';

/*French Fries Page component*/
function FrenchFries({basketTotal, setBasketTotal, ItemName, setItemName, ItemType, setItemType, ItemQuantity, setItemQuantity, ItemPrice, setItemPrice, setBasket}) {

  const [notPurpleContactInfo, setPurpleContactInfo] = useState(true);	
  const [notPurpleLocationInfo, setPurpleLocationInfo] = useState(true);
  
  /*item values to be displayed in menu*/ 
  setItemName("French Fries");
  const itemPriceActual = "25 TL";
  const itemOptions = ["Small Size (+0 TL)","Medium Size (+10 TL)","Large Size (+20 TL)"]; 
  
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
          ItemImage={french_fries}
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


export default FrenchFries;






