import { useState, useEffect } from 'react';
import ClothingList from '../../components/ClothingList/ClothingList';

export default function HomePage({ user, setUser }) {
  const [clothingItems, setClothingItems] = useState([]);

  useEffect(function(){
    console.log('Homepage rendered');
  });

  useEffect(function(){
    console.log('This ussEffect runs only when clothingItems changes');
  }, [clothingItems]);

  return (
    <main className="HomePage">
      <h1>Index Page</h1>
      <button onClick={() => setClothingItems(Date.now())}>Trigger Re-render</button>
      <ClothingList/>
    </main>
  );
}