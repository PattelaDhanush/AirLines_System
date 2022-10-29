import { Link } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';
import Booking_history from '../../MockData/Booking_history.json'

export default function Booking_History() {

    
    return (
        <>
        <Navbar/>
        <div>
            <h1 className="dash-head">Booking History</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>PNR ID</th>
                        <th>Date and Time</th>
                        <th>Class</th>
                        <th>Booking Status</th>
                        <th>From</th>
                        <th>To</th>
                        <th>View receipts</th>
                    </tr>
                </thead>
                <tbody>
                    {
                     
                        Booking_history.map(
                            (trans, index) => (
                                <tr key={trans.transaction_Id}>
                                    <td>{trans.transaction_Id}</td>
                                    <td>{trans.trans_date}</td>
                                    <td>{trans.transfer_type}</td>
                                    <td>{trans.booking_status}</td>
                                    <td>{trans.from}</td>
                                    <td>{trans.to}</td>
                                    <td>
                                       <Link
                                            className="btn btn-info"
                                            to="/Home"
                                            target="_blank">
                                                View Receipt
                                            </Link>
                                    </td>
                                </tr>
                            )
                        )
                    } 
                </tbody>
            </table>
        </div>
        </>
    )
}