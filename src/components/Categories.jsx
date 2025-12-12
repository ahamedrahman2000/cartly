import electronics from "../assets/images/laptop.jpg";
import camera from "../assets/images/camera.jpg";
import cleansers from "../assets/images/cleansers.jpg";
import heels from "../assets/images/heels.jpg";
import shoe from "../assets/images/shoe.jpg";
import mouse from "../assets/images/mouse.jpg";

const categories = [
  {
    name: "Laptop",
    img: electronics,
  },
  {
    name: "Camera",
    img: camera,
  },
  {
    name: "Cleansers",
    img: cleansers,
  },
  {
    name: "Heels",
    img: heels,
  },
  {
    name: "Shoe",
    img: shoe,
  },
  {
    name: "Mouse",
    img: mouse,
  },
];

const CategorySection = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Shop by Category</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 ">
        {categories.map((cat, index) => (
          <div key={index} className="w-[200px] rounded-md shadow-md duration-300 hover:-translate-y-1">

            {<img src={cat.img} className="w-full h-[150px] object-cover "/>} 

            {<p className="text-xl text-center pt-3 font-semibold">{cat.name}</p>}
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
