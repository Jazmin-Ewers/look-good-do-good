import { useEffect } from 'react';
import LineItem from '../../components/LineItem/LineItem';
import * as ordersAPI from '../../utilities/orders-api';

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
    <table>
    <thead>
    <tr>
      <th>Product</th>
      <th>Qty</th>
      <th>Price</th>
      <th>Total Price</th>
    </tr>
    </thead>
    <tbody>
    {cart.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isPaid={cart.isPaid}
      key={item._id}
    />
    )}
    </tbody>
    </table>
    </main>
  )
}
