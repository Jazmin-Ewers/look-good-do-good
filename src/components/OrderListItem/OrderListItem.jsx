export default function OrderListItem({orderId, order}){
    return (
        <div className="table-row">
        <div className="row-item">3/4/21</div>
        <div className="row-item">{order.orderId}</div>
        <div className="row-item">{order.orderTotal}</div>
        <div className="row-item">{order.totalQty}</div>
        </div>
    )
}
