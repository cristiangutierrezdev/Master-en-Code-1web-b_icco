import { Link } from "react-router-dom";

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
      <article className="col-span-7 pt-12 pl-12">
        <div className="grid bg-black w-full pb-8">
          <div className="grid grid-cols-2 px-16">
            <div className="flex flex-col gap-8  pt-24 ">
              <div className="flex items-center gap-8">
                <div>
                  <svg
                    fill="#ffffff"
                    height="64px"
                    width="60px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 22.773 22.773"
                    xmlSpace="preserve"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path>{" "}
                          <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path>{" "}
                        </g>{" "}
                        <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                        <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                        <g> </g> <g> </g> <g> </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
                <h5
                  className=" text-2xl text-white font-light pt-2"
                  style={{ fontFamily: "poppins" }}
                >
                  iPhone 14 Series
                </h5>
              </div>

              <h5 className="flex tracking-wider gap-2 text-white text-5xl font-semibold pr-8 leading-tight">
                Up to 10% <br></br> off Voucher
              </h5>
              <Link className="text-white flex items-center gap-4 text-xl">
                <p className="hover:border-white border-black border-b leading-normal">
                  Shop Now
                </p>
                <span className="material-symbols-outlined text-white pt-1 ">
                  arrow_forward
                </span>{" "}
              </Link>
            </div>
            <div className=" mt-4 w-full">
              <img className="w-full" src="./iphone.jpg" alt="" />
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <button className="w-4 h-4 bg-gray-500 border border-black rounded-full cursor-pointer active:bg-red-800 hover:scale-150"></button>
            <button className="w-4 h-4 bg-gray-500 border border-black rounded-full cursor-pointer active:bg-red-800 hover:scale-150"></button>
            <button className="w-4 h-4 bg-gray-500 border border-black rounded-full cursor-pointer active:bg-red-800 hover:scale-150"></button>
            <button className="w-4 h-4 bg-gray-500 border border-black rounded-full cursor-pointer active:bg-red-800 hover:scale-150"></button>
            <button className="w-4 h-4 bg-gray-500 border border-black rounded-full cursor-pointer active:bg-red-800 hover:scale-150"></button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Categories;
