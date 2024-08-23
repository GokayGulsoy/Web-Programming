/*Onion Rings menu page*/
import '../index.css';
import { useState } from "react";
import onion_rings from './menu_pictures/onion_rings.jpg';
import ItemDetailBox from '../ItemDetailBox';
import Header from '../MenuPageHeader';
import Footer from '../MenuPageFooter';

/*Onion rings Page component*/
function OnionRings({basketTotal, setBasketTotal, ItemName, setItemName, ItemType, setItemType, ItemQuantity, setItemQuantity, ItemPrice, setItemPrice,setBasket}) {

  const [notPurpleContactInfo, setPurpleContactInfo] = useState(true);	
  const [notPurpleLocationInfo, setPurpleLocationInfo] = useState(true);
  
  /*item values to be displayed in menu*/ 
  setItemName("Onion Rings");
  const itemPriceActual = "30 TL";
  const itemOptions = ["Single Portion (+0 TL)","Double Portion (+15 TL)"]; 
  
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
          ItemImage={onion_rings}
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


export default OnionRings;






