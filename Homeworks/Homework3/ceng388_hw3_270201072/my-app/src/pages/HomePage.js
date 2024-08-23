/* HomePage component  file contains */
import '../index.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import cheeseburger from './menu_pictures/cheeseburger.jpg';
import onion_rings from './menu_pictures/onion_rings.jpg';
import french_fries from './menu_pictures/fries.jpg';
import chicken_burger from './menu_pictures/chicken_burger.jpg';
import fizzy_drink from './menu_pictures/fizzy_drink.jpg';
import water from './menu_pictures/water.jpg';
import beef_burger from './menu_pictures/beef_burger.jpg';
import chicken_legs from './menu_pictures/chicken_legs.jpg';
import soft_serve_ice_cream from './menu_pictures/ice_cream.jpg';
import lemonade from './menu_pictures/lemonade.jpg';
import pizza_slice from './menu_pictures/pizza_slice.jpg';
import phone_emb from './extra_pictures/phone emblem.jpg';
import twitter_emb from './extra_pictures/twitter_emblem.jpg';
import instagram_emb from './extra_pictures/instagram_emblem.webp';
import mail_emb from './extra_pictures/mail_emblem.png';
import fake_map from './extra_pictures/fake_map_location.png';
import basket_icon from './extra_pictures/Basket_icon.png';

/* Header component*/
function Header({ notPurpleContactInfo, notPurpleLocationInfo, personNameSet, aboutUs, aboutUsHandle, aboutUsHandle2, setnotPurpleAboutUs, setPersonName, foodCount1, foodCount2, basketTotal}) {
   return (
    <header> 
      <div className="header_h1">
         <Link to="/"><h1 id="header">Gülbahçe Burger</h1></Link> 
         <AboutUs notPurpleContactInfo={notPurpleContactInfo}
           notPurpleLocationInfo={notPurpleLocationInfo} 
           personNameSet={personNameSet}
           aboutUsHandle={aboutUsHandle}
           aboutUsHandle2={aboutUsHandle2}
           aboutUs={aboutUs}
           setnotPurpleAboutUs={setnotPurpleAboutUs}
           foodCount1={foodCount1}
           foodCount2={foodCount2}
           basketTotal={basketTotal} />      
        <NameBox setpersonName={setPersonName} /> 
      </div>     
    </header>  
   );
}

/*AboutUs component*/
function AboutUs({ notPurpleContactInfo, notPurpleLocationInfo, personNameSet, aboutUs, aboutUsHandle, aboutUsHandle2, setnotPurpleAboutUs, foodCount1, foodCount2, basketTotal}) {
  
  const manipulateAboutUs = event => {

  const dropDownBox = document.getElementById("about_us");

  if (aboutUs) {
    event.currentTarget.style.color = "#EB00FF";
    dropDownBox.style.display = "block";
    aboutUsHandle();
  } 
  
  else {
     const mode = document.getElementsByClassName("switch_mode");
     
     if (mode[0].innerHTML === "Switch to Dark Mode") {
     
         event.currentTarget.style.color = "#001AFF";  
     }
     
     else {
     
         event.currentTarget.style.color = "#00C2FF";
     }
     
         
     dropDownBox.style.display = "none";
     aboutUsHandle2();
    }
  } 
  
  const  switchMode = event => {
	  const mode = document.getElementsByClassName("switch_mode");
	  if (mode[0].innerHTML === "Switch to Dark Mode") {
	    const about_us = document.getElementsByClassName("header_about_button");

	    if (aboutUs) {
	      about_us[0].style.color = "#00C2FF";
	    }

	    about_us[0].style.backgroundColor = "#404040";
	    mode[0].style.color = "#10CB00";
	    mode[0].style.backgroundColor = "#404040";
	    const contact_info = document.getElementById("location1");

	    if (notPurpleContactInfo) {
	      contact_info.style.color = "#00C2FF";
	    }
	    contact_info.style.backgroundColor = "#506262";
	    const location_info = document.getElementById("location2");
	    if (notPurpleLocationInfo) {
	      location_info.style.color = "#00C2FF";
	    }
	    location_info.style.backgroundColor = "#506262";
	    const header_info = document.getElementById("header");
	    header_info.style.color = "#ffffff";
	    const footer = document.getElementsByClassName("footer_part");
	    footer[0].style.backgroundColor = "#506262";
	    const header = document.getElementsByClassName("header_h1");
	    header[0].style.backgroundColor = "#404040";
	    const search_bar = document.getElementsByClassName("search_bar");
	    search_bar[0].style.backgroundColor = "#262626";
	    search_bar[0].style.color = "white";

	    if (!personNameSet) {
	      const button = document.getElementsByClassName("button");
	      button[0].style.color = "#000000";
	    }

	    document.body.style.backgroundColor = "#808080";
	    const foods = document.getElementsByClassName("foods");

	    for (let i = 0; i < foodCount1; i++) {
	      foods[i].style.backgroundColor = "#262626";
	      foods[i].style.color = "white";
	    }

	    const foods2 = document.getElementsByClassName("foods2");
	    for (let i = 0; i < foodCount2; i++) {
	      foods2[i].style.backgroundColor = "#262626";
	      foods2[i].style.color = "white";
	    }

	    mode[0].innerHTML = "Switch to Light Mode";
	  } 
	  
	  else {
	    const about_us = document.getElementsByClassName("header_about_button");
            
	    if (aboutUs) {
	      about_us[0].style.color = "#001AFF";
	    }

	    about_us[0].style.backgroundColor = "#b1bdbd";
	    mode[0].style.color = "#032900";
	    mode[0].style.backgroundColor = "#b1bdbd";
	    const contact_info = document.getElementById("location1");

	    if (notPurpleContactInfo) {
	      contact_info.style.color = "#001AFF";
	    }

	    contact_info.style.backgroundColor = "#b1bdbd";
	    const location_info = document.getElementById("location2");

	    if (notPurpleLocationInfo) {
	      location_info.style.color = "#001AFF";
	    }

	    location_info.style.backgroundColor = "#b1bdbd";
	    const header_info = document.getElementById("header");
	    header_info.style.color = "#000000";
	    const footer = document.getElementsByClassName("footer_part");
	    footer[0].style.backgroundColor = "#b1bdbd";
	    const header = document.getElementsByClassName("header_h1");
	    header[0].style.backgroundColor = "#b1bdbd";
	    const search_bar = document.getElementsByClassName("search_bar");
	    search_bar[0].style.backgroundColor = "#eceff1";
	    search_bar[0].style.color = "#000000";

	    if (!personNameSet) {
	      const button = document.getElementsByClassName("button");
	      button[0].style.color = "#ffffff";
	    }

	    document.body.style.backgroundColor = "#ffffff";

	    const foods = document.getElementsByClassName("foods");
	    for (let i = 0; i < foodCount1; i++) {
	      foods[i].style.backgroundColor = "#ece7e7";
	      foods[i].style.color = "#000000";
	    }

	    const foods2 = document.getElementsByClassName("foods2");
	    for (let i = 0; i < foodCount2; i++) {
	      foods2[i].style.backgroundColor = "#ece7e7";
	      foods2[i].style.color = "#000000";
	    }

	    mode[0].innerHTML = "Switch to Dark Mode";
	  }
	   
  } 

  return (
    <div>
     <button className="header_about_button" onClick={manipulateAboutUs}>About Us</button>
     <button className="switch_mode" onClick={switchMode}>Switch to Dark Mode</button>
     <Link to="/Basket"><button className="Basket-box"> Basket Total: <div className="Basket-price">{basketTotal} TL</div><img src={basket_icon} alt="Basket icon" className="Basket-icon"></img></button></Link>
     <section>
        <div id="about_us">   
            <div className="about_us_div1">About Us: </div>
            <br /> 
            <div className="about_us_div2">Gülbahçe Burger is a fast food joint in Urla/İzmir. It opened for business in 2023.</div>
       </div>
     </section>  
    </div>
  );
}

/* NameBox component*/
function NameBox({ setpersonName }) {
  
  const checkInput = event => {
    const inputText = document.getElementById("fname");
    let letters = /^[A-Z a-z]+$/;

   if (inputText.value.match(letters)) {
      event.currentTarget.style.backgroundColor = "grey";
      const entryText = document.getElementsByClassName("search_bar");
      const personName = inputText.value;
      inputText.value = "";
      entryText[0].innerHTML = "Welcome, " + personName;
      setpersonName(true);

   } 
   else {
       inputText.value = "";
       event.currentTarget.style.backgroundColor = "#FF4545";
     }
   }

   return (
    <section>
      <div className="search_bar">Please Enter your name for a personalized experience:
         <input type="text" id="fname" name="fname" className="name_box_input" />
         <button className="button" onClick={checkInput}>Submit</button>
      </div>    
   </section>   
   );
}


/* MenuItem component*/
function MenuItem({ imageClass,itemName, itemPrice, picturePath, specialStyle} ) {
   
   const linkPath = "/" + itemName;
   return (
      <div> 
       <div className={imageClass}><Link to={linkPath}><img src={picturePath} width="300" height="200" alt={itemName} /></Link>
       <Link className="Link" to={linkPath}><p className="food_paragraph">{itemName}<span className="food_span" style={specialStyle}>{itemPrice}</span></p></Link></div>
      </div>          
  );
}

/*MenuList component*/
function MenuList( { foodsCount, foodsCount2, handleFoodCount, handleFoodCount2} ) {   
   const foods = [           
       {"Name": "Cheeseburger","Price": "70 TL","Path": cheeseburger},
       {"Name": "Onion Rings","Price": "30 TL","Path": onion_rings},
       {"Name": "French Fries","Price": "25 TL","Path": french_fries},
       {"Name": "Chicken Burger","Price": "60 TL","Path": chicken_burger},
       {"Name": "Fizzy Drink","Price": "20 TL","Path": fizzy_drink},
       {"Name": "Water","Price": "10 TL","Path": water},
       {"Name": "Beef Burger","Price": "90 TL","Path": beef_burger},
       {"Name": "Chicken Legs","Price": "45 TL","Path": chicken_legs},
       {"Name": "Soft Serve Ice Cream","Price": "15 TL","Path": soft_serve_ice_cream},
       {"Name": "Lemonade","Price": "13 TL","Path": lemonade},
       {"Name": "Pizza Slice","Price": "50 TL","Path": pizza_slice}
    ]    
      
    let counter = 0; 
    let foodCounter1 = 0;
    let foodCounter2 = 0;
    const menuItems = foods.map((food) => {
                
             counter = (counter + 1) % 3;  
             
             if (counter === 1) {
             	
             	foodCounter2++;
                handleFoodCount2(foodCounter2);               
             }
              
             else {
               
                foodCounter1++;
                handleFoodCount(foodCounter1);
             } 
        
             return (counter===1? <MenuItem key={food.Name} imageClass="foods2" itemName={food.Name} itemPrice={food.Price} picturePath={food.Path} /> :   
                                     <MenuItem key={food.Name} imageClass="foods" itemName={food.Name} itemPrice={food.Price} picturePath={food.Path} />) 
             
             
    })
    
   return (
      <>
      {menuItems}
     </>
   );
}


/*Contact Info component */
function ContactInfo({ contactInfo, locationInfo, setcontactInfo, setlocationInfo }) {
   
   const manipulateContactInfo = event => {
   
        const contactElement = document.getElementById("location1");
        const emblems = document.getElementsByClassName("contact_info");

         if (contactInfo) {
            const locationElement = document.getElementById("location2");
            const locationBlock = document.getElementsByClassName("location_info");
        
         if (!locationInfo) {
              const mode = document.getElementsByClassName("switch_mode");

         if (mode[0].innerHTML === "Switch to Dark Mode") {
              locationElement.style.color = "#001AFF";
         } 
      
         else {
             locationElement.style.color = "#00c2ff";
         }

         locationBlock[0].style.display = "none";
         setlocationInfo(true);
    }

    emblems[0].style.display = "block";
    contactElement.style.color = "#EB00FF";
    setcontactInfo(false);
  } 
  
  else {
    const mode = document.getElementsByClassName("switch_mode");

    if (mode[0].innerHTML === "Switch to Dark Mode") {
      contactElement.style.color = "#001AFF";
    } 
    
    else {
      contactElement.style.color = "#00c2ff";
    }

    emblems[0].style.display = "none";
    setcontactInfo(true);
  }
   
 }
  return (
      <>
        <button id="location1" onClick={manipulateContactInfo}>Contact Info</button> 
        <Location contactInfo={contactInfo}
        locationInfo={locationInfo}
        setcontactInfo={setcontactInfo}
        setlocationInfo={setlocationInfo} />
        
        <div className="contact_info">
	  <img src={phone_emb} className="contact_info_images" alt="Telephone emblem" />
	  <p className="phone_img">+90 123 456 7788</p>
	  <img src={instagram_emb} className="contact_info_images" alt="Instagram emblem" />
	  <p className="instagram_emblem">instagram.com/gbahceburger</p>
	  <img src={twitter_emb} className="contact_info_images" alt="Twitter emblem" />
	  <p className="twitter_emblem">twitter.com/gbahceburger</p>
	  <img src={mail_emb} className="contact_info_images" alt="Mail emblem" />
	  <p className="mail_emblem">gbahceburger@mail.com</p>
        </div>
      </>
    );
}


/*Location component*/
function Location({ contactInfo, locationInfo, setcontactInfo, setlocationInfo }) {
  
  const manipulateLocationInfo = event => {
    const locationElement = document.getElementById("location2");
    const locationBlock = document.getElementsByClassName("location_info");

    if (locationInfo) {
      const contactElement = document.getElementById("location1");
      const emblems = document.getElementsByClassName("contact_info");
      if (!contactInfo) {
          const mode = document.getElementsByClassName("switch_mode");

         if (mode[0].innerHTML === "Switch to Dark Mode") {
	     contactElement.style.color = "#001AFF";
         } 
      
         else {
	    contactElement.style.color = "#00c2ff";
         }

         emblems[0].style.display = "none";
         setcontactInfo(true);
      }

       locationBlock[0].style.display = "block";
       locationElement.style.color = "#EB00FF";
       setlocationInfo(false);
   } 
  
   else {
      const mode = document.getElementsByClassName("switch_mode");

    if (mode[0].innerHTML === "Switch to Dark Mode") {
         locationElement.style.color = "#001AFF";
    } 
    
    else {
         locationElement.style.color = "#00c2ff";
    }

    locationBlock[0].style.display = "none";
    setlocationInfo(true);
  }
 }   

   return (
   <>
     <button id="location2" onClick={manipulateLocationInfo}>Location</button>
      <div className="location_info">
	    <img src={fake_map} width="690" height="450" alt="Map location IZTECH" className="img_fake_map" />
	    <p className="address">Address:</p>
	    <p className="address_output">12087 Sk. Gülbahçe/Urla/İzmir</p>
     </div>
  </>    
   ); 
}

 
/* Footer component */
function Footer({ contactInfo, locationInfo, setcontactInfo, setlocationInfo }) {
  return (
    <footer>
      <div className="footer_part">
        <ContactInfo contactInfo={contactInfo}
        locationInfo={locationInfo}
        setcontactInfo={setcontactInfo}
        setlocationInfo={setlocationInfo} />
     </div>
   </footer>

  );
}

/*Page component*/
function HomePage({basketTotal,basketElements}) {

  const [notPurpleContactInfo, setPurpleContactInfo] = useState(true);	
  const [notPurpleLocationInfo, setPurpleLocationInfo] = useState(true);
  const [personNameSet,setPersonName] = useState(false);
  const [notPurpleAboutUs, setnotPurpleAboutUs] = useState(true);
  const [foodsCount, setFoodsCount] = useState(0);
  const [foodsCount2, setFoodsCount2] = useState(0);
  
  function handleChangeTrue() {
  
      setnotPurpleAboutUs(false);
  }
  
  function handleChangeFalse() {
     
      setnotPurpleAboutUs(true);
  }  
  
  
  function handleFoodCount(newCount) {
  
      setFoodsCount(newCount);
  }
  
   function handleFoodCount2(newCount) {
  
      setFoodsCount2(newCount);
  }
  
   
  return ( 
     <div>
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <Header notPurpleContactInfo={notPurpleContactInfo}
       notPurpleLocationInfo={notPurpleLocationInfo}
       personNameSet={personNameSet}
       aboutUs={notPurpleAboutUs}
       aboutUsHandle={handleChangeTrue}
       aboutUsHandle2={handleChangeFalse}
       setnotPurpleAboutUs={setnotPurpleAboutUs}
       setPersonName={setPersonName}
       foodCount1={foodsCount}
       foodCount2={foodsCount2}
       basketTotal={basketTotal} />  
        
       <MenuList
       foodsCount={foodsCount}
       foodsCount2={foodsCount2}
       handleFoodCount={handleFoodCount}
       handleFoodCount2={handleFoodCount2} />
       
       <div style={{paddingTop: 150}}>
        <Footer contactInfo={notPurpleContactInfo} 
         locationInfo={notPurpleLocationInfo} 
         setcontactInfo={setPurpleContactInfo}
         setlocationInfo={setPurpleLocationInfo}/>
       </div>  
     </div>
  
  );
}


export default HomePage;

