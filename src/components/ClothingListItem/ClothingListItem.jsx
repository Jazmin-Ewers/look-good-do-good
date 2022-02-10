import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function ClothingListItem({clothingItem}) {
  return (
    <div className="ClothingListItem">
    <Link to={`/movies/${clothingItem._id}`} className="movie-link">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={clothingItem.mainimageurl} />
        <Card.Body>
            <Card.Text>{clothingItem.description}</Card.Text>
        </Card.Body>
    </Card>
    </Link>
    </div>
  );
}