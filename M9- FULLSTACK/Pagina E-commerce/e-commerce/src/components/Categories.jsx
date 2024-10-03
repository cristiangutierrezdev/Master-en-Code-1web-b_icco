import { Link } from "react-router-dom";
import Carrousel from "./Carrousel";

function Categories() {
  return (
    <section className="grid grid-cols-8">
      <aside className="grid grid-cols-1 col-span-1">
        <div className="flex flex-col pt-12 gap-6 border-r-2">
          <Link className="flex justify-between text-lg font-medium w-11/12">
            Woman’s Fashion{" "}
            <span className="pt-1 text-base material-symbols-outlined">
              arrow_forward_ios
            </span>
          </Link>
          <Link className="flex justify-between text-lg font-medium w-11/12">
            Men’s Fashion{" "}
            <span className="pt-1 text-base material-symbols-outlined">
              arrow_forward_ios
            </span>
          </Link>
          <Link className="text-lg font-medium w-11/12">Electronics</Link>
          <Link className="text-lg font-medium w-11/12">Home & Lifestyle</Link>
          <Link className="text-lg font-medium w-11/12">Medicine</Link>
          <Link className="text-lg font-medium w-11/12">Sports & Outdoor</Link>
          <Link className="text-lg font-medium w-11/12">Baby’s & Toys</Link>
          <Link className="text-lg font-medium w-11/12">Groceries & Pets</Link>
          <Link className="text-lg font-medium w-11/12">Health & Beauty</Link>
        </div>
      </aside>
      <Carrousel/>
    </section>
  );
}

export default Categories;
