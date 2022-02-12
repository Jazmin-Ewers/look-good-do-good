import { checkToken } from "../../utilities/users-service";
import * as ordersAPI from '../../utilities/orders-api';
import { useEffect, useState} from 'react';
import OrderList from "../../components/OrderList/OrderList";


export default function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);

  useEffect(function(){
    async function getOrdersHistory(){
      const ordersFromDB = await ordersAPI.getOrders();
      setOrders(ordersFromDB);
    }
    getOrdersHistory();
  }, []);

  return (
    <main className="OrderHistoryPage">
    <OrderList orders={orders}/>
  </main>
  )
}

