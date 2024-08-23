/*IceCream menu page*/
import '../index.css';
import { useState } from "react";
import ice_cream from './menu_pictures/ice_cream.jpg';
import ItemDetailBox from '../ItemDetailBox';
import Header from '../MenuPageHeader';
import Footer from '../MenuPageFooter';

/*Ice Cream Page component*/
function IceCream({basketTotal, setBasketTotal, ItemName, setItemName, ItemType, setItemType, ItemQuantity, setItemQuantity, ItemPrice, setItemPrice, setBasket}) {

  const [notPurpleContactInfo, setPurpleContactInfo] = useState(true);	
  const [notPurpleLocationInfo, setPurpleLocationInfo] = useState(true);
  
  /*item values to be displayed in menu*/ 
  setItemName("Soft Serve IceCream");
  const itemPriceActual = "15 TL";
  const itemOptions = ["Vanilla (+0 TL)","Chocolate (+0 TL)","Strawberry (+5 TL)","Mint (+10 TL)"]; 
  
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
          ItemImage={ice_cream}
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


export default IceCream;
