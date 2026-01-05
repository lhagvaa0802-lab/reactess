"use client";
const stock = 10;
export default function Home() {
  return (
    <div>
      <Product isThere={stock > 0} />
    </div>
  );
}

const Product = ({ isThere }) =>
  isThere ? <p>Theer is {stock}</p> : <p>Out of Stock</p>;
