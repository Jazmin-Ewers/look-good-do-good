import ClothingListItem from '../ClothingListItem/ClothingListItem';

export default function ClothingList({clothingItems}) {
    const items = clothingItems.map(item =>
    <ClothingListItem
      key={item._id}
      clothingItem={item}
    />
  );
  return (
    <div className="ClothingListItemGrid">
      {items}
    </div>
  );
}