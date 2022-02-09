import ClothingListItem from '../ClothingListItem/ClothingListItem';

export default function ClothingList({clothingItems}) {
    const items = clothingItems.map(item =>
    <ClothingListItem
      key={item._id}
      clothingItem={item}
    />
  );
  return (
    <main className="ClothingList">
      {items}
    </main>
  );
}