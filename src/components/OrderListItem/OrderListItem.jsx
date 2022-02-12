export default function OrderListItem({orderItem, orderId, lineItems, isPaid, orderTotal, totalQty}){
    return (
        <div className="table-row">
        <div className="row-item">{orderId}</div>
        <div className="row-item">{orderTotal}</div>
        <div className="row-item">{totalQty}</div>
        <div className="row-item">{totalQty}</div>
        </div>
    )
}
