import Button from 'react-bootstrap/Button';
import * as itemsAPI from '../../utilities/items-api';
import { useParams } from "react-router-dom";
import { useEffect} from 'react';
import './ClothingDetailPage.css'

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
      <div className="ClothingDetailPageMainImgContainer">
        <img src={clothingItem.mainimageurl}></img>
      </div>
      <div className="ClothingDetailPageDetailImgContainer">
        <img src={clothingItem.detailimageurl}></img>
      </div>
          <div className="ClothingDetailPageContent">
            <h3>{clothingItem.name}</h3>
            <h5>${clothingItem.price}</h5>
            <p>{clothingItem.description}</p>
                <div className="sizeboxcontainer">
                  <div className="sizebox">S</div>
                  <div className="sizebox">M</div>
                  <div className="sizebox">L</div>
                  <div className="sizebox">XL</div>
                </div>
             <br></br>
            <Button variant="dark" size="lg" onClick={() => handleAddToOrder(clothingItem._id)}>Add to Cart</Button>
          </div>
    </main>
  );
}