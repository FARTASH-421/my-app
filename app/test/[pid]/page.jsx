"use client";

import React from "react";
import { useParams } from "next/navigation";
const ShowIpPage = () => {
  const params = useParams();
  const id = params.pid;

  console.log(id);
  const data = [
    { id: "p1", name: "Book1", price: "123$", description: "This is Book 1" },
    { id: "p2", name: "Book2", price: "300$", description: "This is Book 2" },
    { id: "p3", name: "Book3", price: "500$", description: "This is Book 3" },
    { id: "p4", name: "Book4", price: "899$", description: "This is Book 4" },
    { id: "p5", name: "Book5", price: "100$", description: "This is Book 5" },
  ];

  const product = data.find((item) => item.id == id);
  if (!product) {
    return <div className="p-4 text-red-500">Product not found!</div>;
  }

  return (
    <div className="p-6 text-lg space-y-3">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl">Price: {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ShowIpPage;
