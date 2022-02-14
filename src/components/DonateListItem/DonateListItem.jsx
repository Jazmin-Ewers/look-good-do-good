import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function DonateListItem({DonationLocation}) {
  return (
    <div className="DonateListItemCard">
        <div className='DonateListItemCardImgContainer'>
          <img src={DonationLocation.donation_img} alt="DonateItem" className="card_img"></img>
        </div>
            <div className="card__content">
              <h2 className="card__title">{DonationLocation.donation_name}</h2>
              <hr></hr>
              <p className="card__description">{DonationLocation.description}</p>
              <p><h6>Accepted Donations</h6>{DonationLocation.accepted_donations}</p>
              <p><h6>How to Donation</h6>{DonationLocation.how_to_donate}</p>
              <Button variant="dark"><a className="card_button_text" href={DonationLocation.website_path} target="_blank">Donate</a></Button>
            </div>
    </div>
  );
}