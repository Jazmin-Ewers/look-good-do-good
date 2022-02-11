import { useEffect } from 'react';
import LineItem from '../../components/LineItem/LineItem';
import * as ordersAPI from '../../utilities/orders-api';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './CartPage.css';

export default function CartPage({ cart, setCart }) {
    useEffect(() => {
    async function getCart(){
      const cartFromDB = await ordersAPI.getCart();
      setCart(cartFromDB);
    }
    getCart();
    }, []);

    if (!cart) return null;
    const lineItems = cart.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isPaid={cart.isPaid}
      key={item._id}
    />
    );

  return (
    <main className="CartPage">
    <h2>Shopping Bag</h2>
    <div className="main-container">
      <div className="table-container">
        <div className="table-row heading">
          <div className="row-item">PRODUCT</div>
          <div className="row-item">PRICE</div>
          <div className="row-item">QTY</div>
          <div className="row-item">TOTAL PRICE</div>
    </div>
    {cart.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isPaid={cart.isPaid}
      key={item._id}
    />
    )}
   </div>
</div>
    {/* <h2>Shopping Bag</h2>
    <div className="CartPageTable">
    <div className="CartPageTableHeader">
    Item
    Item Price
    Quantity
    Total Price
    </div>
    <tbody>
    {cart.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isPaid={cart.isPaid}
      key={item._id}
    />
    )}
    </tbody>
    </div>
    <div>
    <h2>Order Summary</h2>
    <Card>
    <Card.Body>Sub Total: {cart.orderTotal}</Card.Body>
    <Card.Body>Shipping: TBD</Card.Body>
    <Card.Body>Taxes: 0.00</Card.Body>
    <Card.Body>Total: {cart.orderTotal}</Card.Body>
    <Button variant="dark">CHECKOUT</Button>
    </Card>
    </div> */}
    </main>
  )
}
