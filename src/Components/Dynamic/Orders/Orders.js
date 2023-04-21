import { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import Header from '../../Shared/Header/Header';
import { useState } from 'react';

const Orders = () => {
    const { orders } = useContext(AuthContext);
    const [displayOrders, setDisplayOrders] = useState(orders);
    let i = 1;

    const handleDelete = (order) => {
        const confirm = window.confirm('Are you sure you want to remove this course?');
        if (confirm) {
            fetch(`http://localhost:5000/orders/${order}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const currentOrders = displayOrders.filter(odr => odr._id !== order);
                        setDisplayOrders(currentOrders);
                        alert('Course removed successfully!');
                    }
                });
        }
    }

    return (
        <div className='orders'>
            <Header></Header>
            <h2 className="text-3xl font-bold my-10 text-center">You have {displayOrders.length} courses</h2>
            <div className="container mx-auto">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                displayOrders.map(order => <tr key={order._id}>
                                    <th>{i++}</th>
                                    <td className='font-bold'>{order.courseTitle}</td>
                                    <td className='font-bold'>${order.coursePrice}</td>
                                    <td className='bg-red-500 w-14 flex border border-gray-400 my-2 rounded justify-center text-white'><button onClick={() => handleDelete(order._id)}>X</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;