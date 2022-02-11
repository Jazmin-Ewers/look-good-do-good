import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as itemsAPI from '../../utilities/items-api';
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';

export default function ClothingDetailPage({setClothingItem, clothingItem, handleAddToOrder}) {

    let { clothingsItemParam } = useParams();

    useEffect(() => {
    async function getItems(){
      const itemFromDB = await itemsAPI.getById(clothingsItemParam);
      setClothingItem(itemFromDB);
    }
    getItems();
    }, []);
      return (
    <main className="ClothingDetailPage">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={clothingItem.detailimageurl} />
        <Card.Body>
            <Card.Text>Detail Page{clothingItem.name}</Card.Text>
            <Button variant="dark" onClick={() => handleAddToOrder(clothingItem._id)}>Add to Cart</Button>
        </Card.Body>
    </Card>
    </main>
  );
}