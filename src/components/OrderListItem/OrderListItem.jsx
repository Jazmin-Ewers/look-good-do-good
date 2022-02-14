export default function OrderListItem({orderId, order, lineItem}){

    const item = lineItem.map(item =>
        <OrderListItem
        orderId={order.orderId}
        order={order}
        />
    );

    return (
        <div className="table-row">
        <div className="row-item">
        <ul>
            {lineItem.map((item) => {
            return <li ><img src={item.item.mainimageurl}></img></li>;
            })}
        </ul>

        </div>
        <div className="row-item">{order.orderId}</div>
        <div className="row-item">{order.totalQty}</div>
        <div className="row-item">{order.orderTotal}</div>
        </div>
    )
}
