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
      <LineItem/>
    </main>
  )
}
