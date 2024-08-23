import fake_map from './pages/extra_pictures/fake_map_location.png';
/*Location component for MenuPages with slight 
  differences from HomePage Location component  */
export default function Location({ contactInfo, locationInfo, setcontactInfo, setlocationInfo }) {
  
  const manipulateLocationInfo = event => {
    const locationElement = document.getElementById("location2");
    const locationBlock = document.getElementsByClassName("location_info");

    if (locationInfo) {
      const contactElement = document.getElementById("location1");
      const emblems = document.getElementsByClassName("contact_info");
      if (!contactInfo) {
     
	 contactElement.style.color = "#001AFF";
      
         emblems[0].style.display = "none";
         setcontactInfo(true);
      }

       locationBlock[0].style.display = "block";
       locationElement.style.color = "#EB00FF";
       setlocationInfo(false);
   } 
  
   else {
      
    locationElement.style.color = "#001AFF";

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
