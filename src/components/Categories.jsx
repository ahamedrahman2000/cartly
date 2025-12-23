 import { products } from "../data/products";

const CategorySection = () => {
  return (
    <section className="  mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Shop by Category</h1>

      <div className="flex  gap-6 snap-x overflow-x-auto overflow-hiddensnap-mandatory shadow-lg ">
        {products.map((product) => (
          <div key={product.id} className="min-w-[290px] rounded-md shadow-lg duration-300 hover:-translate-y-1">

            {<img src={product.image} alt="" className="w-full h-64 object-cover rounded-lg"/>} 

            {<p className="text-xl text-center pt-3 font-semibold">{product.title}</p>}
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
