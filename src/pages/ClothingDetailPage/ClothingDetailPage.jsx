import Card from 'react-bootstrap/Card';
import * as itemsAPI from '../../utilities/items-api';
import { useParams } from "react-router-dom";

export default function ClothingDetailPage({setClothingItems, clothingItems}) {
    let { clothingName } = useParams();
    console.log()
      return (
    <main className="ClothingDetailPage">
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={clothingItem.detailimageurl} /> */}
        <Card.Body>
            <Card.Text>Detail Page</Card.Text>
        </Card.Body>
    </Card>
    </main>
  );
}