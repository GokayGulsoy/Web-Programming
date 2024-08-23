import { Link } from "react-router-dom";
import basket_icon from './pages/extra_pictures/Basket_icon.png';
/* Header component For Menu Pages with a slight
  differences from HomePage */
export default function Header({basketTotal}) {
   return (
    <header> 
      <div className="header_h1">
         <Link to="/"><h1 id="header">Gülbahçe Burger</h1></Link>  
         <Link to="/Basket"><BasketDisplay basketTotal={basketTotal} /></Link>
      </div>     
    </header>  
   );
}

/*BasketDisplay component*/
function BasketDisplay({basketTotal}) {
  return (
    <div>
     <button className="Basket-box2"> Basket Total: <div className="Basket-price">{basketTotal} TL</div>
     <img src={basket_icon} alt="Basket icon" className="Basket-icon"></img></button>
    </div>
  );
}

