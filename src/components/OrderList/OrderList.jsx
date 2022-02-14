import OrderListItem from '../../components/OrderListItem/OrderListItem';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function OrderList({orders}){
    
    const ordersList = orders.map(order =>
        <OrderListItem
        orderId={order.orderId}
        order={order}
        />
    );
    return(
    <main className="OrderList">
    { orders ?
    <div className="OrderListContainer main-container">
      <div className="OrderListContainerTable table-container">
        <div>ORDER HISTORY</div>
        <div className="table-row heading">
          <div className="row-item">PRODUCTS</div>
          <div className="row-item">PRICE</div>
          <div className="row-item">QTY</div>
          <div className="row-item">TOTAL PRICE</div>
    </div>
    {orders.map(order =>
    <OrderListItem
      orderId={order.orderId}
      order={order}
    />
    )}
    </div>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>ORDER SUMMARY</Card.Title>
            <Card.Text>Sub Total </Card.Text>
            <Card.Text>Shipping TBD</Card.Text>
            <Card.Text>Estimated Tax $0.00</Card.Text>
            <Card.Text>TOTAL </Card.Text>
        </Card.Body>
    </Card>
</div> : <div>NO ORDERS YET!</div>}
    </main>
    )
} 

