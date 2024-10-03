import ProductsCard from "./ProductsCard";
import { data } from "../data";

function Catalog() {
  const products = data;

  return (
    <section className="flex flex-col gap-8">
      <div className="flex mt-32 mx-14 items-center gap-4">
        <div className="bg-red-500 w-8 h-16 rounded "></div>
        <div className="text-red-500 font-semibold text-lg">Today's</div>
      </div>
      <div className="flex mx-14 w-content items-center">
        <div className="w-1/5">
          <h5 className="font-semibold text-4xl tracking-wider">Flash Sales</h5>
        </div>
        <div className=" w-3/5">
          <ul className="flex gap-8">
            <li className="flex items-center gap-8 ">
              <div>
                <p className="font-medium text-sm">Days</p>
                <p className="font-bold text-3xl">03</p>
              </div>
              <span className="text-2xl text-red-500 font-bold">:</span>
            </li>
            <li className="flex items-center gap-8 ">
              <div>
                <p className="font-medium text-sm">Hours</p>
                <p className="font-bold text-3xl">23</p>
              </div>
              <span className="text-2xl text-red-500 font-bold">:</span>
            </li>
            <li className="flex items-center gap-8 ">
              <div>
                <p className="font-medium text-sm">Minutes</p>
                <p className="font-bold text-3xl">19</p>
              </div>
              <span className="text-2xl text-red-500 font-bold">:</span>
            </li>
            <li className="flex items-center gap-8 ">
              <div>
                <p className="font-medium text-sm">Seconds</p>
                <p className="font-bold text-3xl">56</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-end items-center w-1/5 gap-8">
          <span className="material-symbols-outlined rounded-full bg-gray-200 p-1 cursor-pointer ">
            arrow_back
          </span>
          <span className="material-symbols-outlined rounded-full bg-gray-200 p-1 cursor-pointer">
            arrow_forward
          </span>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-10">
        {products.map((product) => {
          return (
            <ProductsCard
              key={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              rate={product.rate}
              off={product.off}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Catalog;
