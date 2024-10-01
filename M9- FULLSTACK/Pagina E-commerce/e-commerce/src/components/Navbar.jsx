import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="grid">
      <div className="bg-black grid grid-cols-4 py-2">
        <div className="grid text-white col-span-2 justify-end text-base">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </div>
        <div className="text-white pl-3 ">
          <Link className="font-bold border-b w-auto">ShopNow</Link>
        </div>
        <div className="text-white">English ⬇️</div>
      </div>
      <div className="grid grid-cols-7 mt-4">
        <h1 className="grid justify-center col-span-2">Exclusive</h1>
        <ul className="grid grid-cols-5  col-span-3">
          <li className="col-span-1"><a href="">Home</a></li>
          <li className="col-span-1"><a href="">Contact</a></li>
          <li className="col-span-1"><a href="">About</a></li>
          <li className="col-span-1"><a href="">Sing Up</a></li>
        </ul>
        <div className="col-span-1">
          <input type="text" placeholder="What are you looking for?" />
          <span>🔍</span>
        </div>
        <div className="col-span-1">
          <span>♡</span>
          <span>🛒</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
