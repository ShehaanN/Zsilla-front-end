import React from "react";
import { useParams } from "react-router";

const OrderDetailsPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Order Details for Order ID: {id}</h1>
      <p>Here you can view the details of your order.</p>
    </div>
  );
};

export default OrderDetailsPage;
