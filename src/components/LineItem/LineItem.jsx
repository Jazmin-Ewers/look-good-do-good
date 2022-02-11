import Card from 'react-bootstrap/Card';

export default function LineItem({ lineItem, isPaid}) {
  return (
    <div className="table-row">
    <div className="CartPageImg">lemi<img src={lineItem.item.mainimageurl}></img></div>
    <div className="row-item">{lineItem.item.price}</div>
    <div className="row-item">{lineItem.qty}</div>
    <div className="row-item">{lineItem.exitPrice}</div>
    </div>
  );
}

  {/* //   <tr>
  //   <td> 
  //   <Card style={{ width: '18rem' }}>
  //     <Card.Img variant="top" src={lineItem.mainimageurl} />
  //   </Card>
  //   </td>
  //   <td>{lineItem.qty}</td>
  //   <td>{lineItem.item.price}</td>
  //   <td>{lineItem.exitPrice}</td>
  // </tr>
  ); */}