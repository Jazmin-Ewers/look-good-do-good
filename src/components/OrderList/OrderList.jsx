import OrderListItem from '../../components/OrderListItem/OrderListItem';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function OrderList({orders}){
    
    const ordersList = orders.map(order =>
        <OrderListItem
        orderId={order.orderId}
        lineItems={order.lineItems}
        isPaid={order.isPaid}
        orderTotal={order.orderTotal}
        totalQty={order.totalQty}
        />
    );
    return(
    <main className="OrderList">
    { orders ?
    <div className="main-container">
    <div>ORDERS ORDER SUMMARY</div>
      <div className="table-container">
        <div className="table-row heading">
          <div className="row-item">PRODUCT</div>
          <div className="row-item">PRICE</div>
          <div className="row-item">QTY</div>
          <div className="row-item">TOTAL PRICE</div>
    </div>
    {orders.map(order =>
    <OrderListItem
      orderId={order.orderId}
      lineItems={order.lineItems}
      isPaid={order.isPaid}
      orderTotal={order.orderTotal}
      totalQty={order.totalQty}
    />
    )}
    </div>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
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

