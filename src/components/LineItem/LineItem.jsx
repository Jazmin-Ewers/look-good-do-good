import Card from 'react-bootstrap/Card';

export default function LineItem({ lineItem, isPaid}) {
  return (
    <div className="table-row">
    <div className="row-item"><img className="CartPageImg" src={lineItem.item.mainimageurl}/></div>
    <div className="row-item">{lineItem.item.price}</div>
    <div className="row-item">{lineItem.qty}</div>
    <div className="row-item">{lineItem.exitPrice}</div>
    </div>
  );
}
