import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import ClothingList from '../../components/ClothingList/ClothingList';
import './HomePage'

export default function HomePage({ user, setUser, setClothingItems, clothingItems }) {
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
  }, []);

  return (
    <main className="HomePage">
      <ClothingList clothingItems={clothingItems}/>
    </main>
  );
}