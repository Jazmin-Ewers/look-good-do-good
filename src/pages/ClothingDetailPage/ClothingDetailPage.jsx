import Card from 'react-bootstrap/Card';
import * as itemsAPI from '../../utilities/items-api';
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';

export default function ClothingDetailPage({setClothingItem, clothingItem}) {

    let { clothingsItemParam } = useParams();
    console.log(clothingsItemParam)

    useEffect(() => {
    async function getItems(){
      const itemFromDB = await itemsAPI.getById(clothingsItemParam);
      console.log(itemFromDB.name)
      setClothingItem(itemFromDB);
    }
    getItems();
    }, []);
      return (
    <main className="ClothingDetailPage">
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={clothingItem.detailimageurl} /> */}
        <Card.Body>
            <Card.Text>Detail Page{clothingItem.name}</Card.Text>
        </Card.Body>
    </Card>
    </main>
  );
}