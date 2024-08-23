import Location from './MenuPageLocationInfo';
import phone_emb from './pages/extra_pictures/phone emblem.jpg';
import twitter_emb from './pages/extra_pictures/twitter_emblem.jpg';
import instagram_emb from './pages/extra_pictures/instagram_emblem.webp';
import mail_emb from './pages/extra_pictures/mail_emblem.png';
/*Contact Info component for menu pages with slight
  differences from HomePage Contact Info component */
export default function ContactInfo({ contactInfo, locationInfo, setcontactInfo, setlocationInfo }) {
   
   const manipulateContactInfo = event => {
   
        const contactElement = document.getElementById("location1");
        const emblems = document.getElementsByClassName("contact_info");

         if (contactInfo) {
            const locationElement = document.getElementById("location2");
            const locationBlock = document.getElementsByClassName("location_info");
        
       if (!locationInfo) {

         locationElement.style.color = "#001AFF";
         locationBlock[0].style.display = "none";
         setlocationInfo(true);
    }

    emblems[0].style.display = "block";
    contactElement.style.color = "#EB00FF";
    setcontactInfo(false);
  } 
  
  else {
     contactElement.style.color = "#001AFF";

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
