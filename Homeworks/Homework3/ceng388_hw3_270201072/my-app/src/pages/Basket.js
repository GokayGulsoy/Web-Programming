/*Basket menu page*/
import '../index.css';
import { useState } from "react";
import Header from '../MenuPageHeader';
import Footer from '../MenuPageFooter';
import BasketTotal from '../BasketTotal';
import BasketContents from '../BasketContents';

/*Basket Page component*/
function Basket({basketTotal, ItemName,setItemName, ItemType, setItemType, ItemQuantity, setItemQuantity, ItemPrice, basketElements, setBasket}) {

  const [notPurpleContactInfo, setPurpleContactInfo] = useState(true);	
  const [notPurpleLocationInfo, setPurpleLocationInfo] = useState(true); 
  	
  return ( 
      <div> 
       <div>
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <Header basketTotal={basketTotal} />  
      </div>  
       
      <BasketTotal basketTotal={basketTotal}/>
      <BasketContents
         ItemName={ItemName}
         ItemType={ItemType}
         ItemQuantity={ItemQuantity}
         ItemPrice={ItemPrice}
         basketElements={basketElements} 
         setBasket={setBasket}
         setItemName={setItemName}
         setItemType={setItemType}
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


export default Basket;







