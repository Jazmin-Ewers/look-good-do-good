import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ClothingListItem({clothingItem}) {
  return (
    <div className="ClothingListItem">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={clothingItem.mainimageurl} />
        <Card.Body>
            <Card.Text>{clothingItem.description}</Card.Text>
        </Card.Body>
    </Card>
    </div>
  );
}