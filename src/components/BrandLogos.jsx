import nike from "../assets/images/nike2.jpg";
import gucci from "../assets/images/gucci.png";
import puma2 from "../assets/images/puma3.png";
import zara from "../assets/images/zara2.png";
import adidas from "../assets/images/adidas.png";
import hm from "../assets/images/hm.png";

const brands = [
  { id: 1, name: "Nike", img: nike },
  { id: 2, name: "Adidas", img: adidas },
  { id: 3, name: "Puma", img: puma2 },
  { id: 4, name: "Gucci", img: gucci },
  { id: 5, name: "Zara", img: zara },
  { id: 6, name: "H&M", img: hm },
];
const BrandLogos = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-center text-gray-700 font-semibold tracking-wide uppercase text-sm">
        Trusted by Top Global Brands
      </h2>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center opacity-70">
        {brands.map((brand) => (
          <img  key={brand.id}
            src={brand.img}  alt={brand.name} className="w-28 grayscale hover:grayscale-0  "
          />
        ))}
      </div>
    </section>
  );
};

export default BrandLogos;
