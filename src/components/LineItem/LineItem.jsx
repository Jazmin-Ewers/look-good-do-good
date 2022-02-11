import Card from 'react-bootstrap/Card';

export default function LineItem({ lineItem, isPaid}) {
  return (
    <tr>
    <td> 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={lineItem.mainimageurl} />
    </Card>
    </td>
    <td>{lineItem.qty}</td>
    <td>{lineItem.item.price}</td>
    <td>{lineItem.exitPrice}</td>
  </tr>
  );
}