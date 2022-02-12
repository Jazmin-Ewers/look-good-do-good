import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import ClothingList from '../../components/ClothingList/ClothingList';
import './HomePage.css'

export default function HomePage({ user, setUser, setClothingItems, clothingItems, cart, setCart, handleAddToOrder }) {
  const categoriesRef = useRef([]);

  useEffect(() => {
    async function getItems(){
      const itemsFromDB = await itemsAPI.getAll();
      categoriesRef.current = itemsFromDB.reduce((acc, item) => {
        const categoryName = item.category.name;
        return acc.includes(categoryName) ? acc : [...acc, categoryName];
      }, []);
      setClothingItems(itemsFromDB);
    }
    getItems();
  });

  return (
    <main className="HomePage">
      <div className="HomePageContainer">
      <img className="HomePageImg" 
      src="https://i.imgur.com/hxH02sF.jpg?"></img>
      <div className="OverlayText">OVERLAY</div>
      </div>
      <div className="ClothingItemGrid"><ClothingList clothingItems={clothingItems}/></div>
    </main>
  );
}