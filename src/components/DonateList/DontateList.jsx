import DonateListItem from '../DonateListItem/DonateListItem';

export default function DonateList({DonationLocations}) {
    const locations = DonationLocations.map(location =>
    <DonateListItem
    DonationLocation = {location}
    />
  );
  return (
    <div className="DonateListItemContainter">
      {locations}
    </div>
  );
}