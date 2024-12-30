import React, { useContext, useEffect, useState } from "react";
import "./Myorders.css";
import { StroeContext } from "../../Context/StroeContext";
import axios from "axios";
import { assets } from "../../assets/assets";
import { handleSuccess } from "../util";
import { ToastContainer } from "react-toastify";

const Myorders = () => {
  const { url, token } = useContext(StroeContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    // console.log(response.data.data, "myorder");
    const orders = response.data.data; // Assuming this is an array
    if (orders.length > 0) {
      const statuses = orders.map((order) => order.status); // Extract all statuses
      statuses.forEach((status, index) => {
        handleSuccess(` ${status}`);
      });
    }

  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + "x" + item.quantity;
                  } else {
                    return item.name + "x" + item.quantity + ",";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items:{order.items.length}</p>
              <p>
                <span>&#x25cf;</span>
                <b>{order.status}</b>
              </p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          );
        })}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Myorders;
