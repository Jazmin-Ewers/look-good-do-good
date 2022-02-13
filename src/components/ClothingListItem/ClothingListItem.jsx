import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function ClothingListItem({clothingItem}) {
  return (
    <Link to={`/clothings/${clothingItem._id}`} style={{textDecoration: "none"}} className="movie-link">
    <div className="ClothingListItemCard stacked">
      <img src={clothingItem.mainimageurl} alt="ClothingItem" className="card_img"></img>
      <div className="card__content">
        <p className="card__title">{clothingItem.name}</p>
        <p className="card__price">${clothingItem.price}</p>
      </div>
    </div>
    </Link>
  );
}