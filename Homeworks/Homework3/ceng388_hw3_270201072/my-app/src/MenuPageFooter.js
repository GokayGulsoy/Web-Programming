import ContactInfo from './MenuPageContactInfo';
/* Footer component with slight differences
   from HomePage Footer component */
export default function Footer({ contactInfo, locationInfo, setcontactInfo, setlocationInfo }) {
  return (
    <footer>
      <div className="footer_part2">
        <ContactInfo contactInfo={contactInfo}
        locationInfo={locationInfo}
        setcontactInfo={setcontactInfo}
        setlocationInfo={setlocationInfo} />
     </div>
   </footer>

  );
}
