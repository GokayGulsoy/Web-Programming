import basket_icon from './pages/extra_pictures/Basket_icon.png';
import './index.css';

/*Basket Total component*/
export default function BasketTotal({basketTotal}) {

     return (    
       <div>    
          <div className="Basket-total">
                <img src={basket_icon} alt="Basket icon" className="Basket-total-icon"/> 
                <div className="Basket-total-price">Basket total: <span style={{color: "red"}}>{basketTotal} TL</span></div> 
                <button className="PurchaseButton"><span className="PurchaseText">Purchase</span></button>               
          </div>        
       </div> 
     );
}
