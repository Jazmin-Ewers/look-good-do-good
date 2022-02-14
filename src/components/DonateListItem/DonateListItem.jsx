import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function DonateListItem({DonationLocation}) {
  return (
    <a href={DonationLocation.website_path} target="_blank">
    <div className="DonateListItemCard stacked">
      <img src={DonationLocation.donation_img} alt="DonateItem" className="card_img"></img>
      <div className="card__content">
        <p className="card__title">{DonationLocation.donation_name}</p>
        <p className="card__price">{DonationLocation.description}</p>
        <p>{DonationLocation.accepted_donations}</p>
        <p>{DonationLocation.how_to_donate}</p>
      </div>
    </div>
    </a>
  );
}