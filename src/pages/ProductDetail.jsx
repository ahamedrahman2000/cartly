import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  const [mainImage, setMainImage] = useState(product?.image);

  if (!product) {
    return <p className="p-10">Product not found</p>;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-[500px_1fr] gap-10">
        <div>
          <img
            src={mainImage}
            alt={product.title}
            className="w-full h-[450px] object-cover rounded-xl"
          />

          {product.thumbnails?.length > 0 && (
            <div className="flex gap-4 mt-4">
              {product.thumbnails.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  onClick={() => setMainImage(img)}
                  className="w-30 h-20 rounded cursor-pointer border obeject-cover"
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-blue-600 text-3xl font-bold">${product.price}</p>
          <p className="text-gray-500">{product.description}</p>

          {product.colors?.length > 0 && (
            <div>
              <p className="font-semibold">Color</p>
              <div className="flex gap-2 mt-2">
                {product.colors.map((clr, index) => (
                  <span
                    key={index}
                    style={{ backgroundColor: clr }}
                    className="w-5 h-5 rounded-full cursor-pointer"
                  />
                ))}
              </div>
            </div>
          )}

          {product.sizes?.length > 0 && (
            <div>
              <p className="font-semibold mt-4">Size</p>
              <div className="flex gap-2 mt-3">
                {product.sizes.map((size, index) => (
                  <span
                    key={index}
                    className="border rounded px-4 py-2 text-xs hover:bg-gray-200"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="space-x-3 mt-4">
            <Link 
              onClick={() => addToCart(product)}
              className="bg-gray-900 text-white px-6 py-3 rounded-md"
            >
              Add to Cart
            </Link>
            <Link to="/cart"
              onClick={() => addToCart(product)}
              className="border px-6 py-3 rounded-md"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
