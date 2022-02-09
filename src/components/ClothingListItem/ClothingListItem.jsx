export default function ClothingListItem({clothingItem}) {
  return (
    <div className="ClothingListItem">
    Item goes here
    <div>{clothingItem.name}</div>
    </div>
  );
}