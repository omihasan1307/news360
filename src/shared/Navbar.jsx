const Navbar = () => {
  return (
    <div className="bg-base-200">
      <div className="drawer max-w-screen-2xl mx-auto">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 font-serif text-xl text-basicColor ">
              News 360
            </div>
            <div className="flex-none hidden lg:block ">
              <div className="flex items-center justify-between w-[60rem] ">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Video</a>
                  </li>
                  <li>
                    <a>Magazine</a>
                  </li>
                </ul>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="search"
                    className="px-3 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 ">
            {/* Sidebar content here */}
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Video</a>
            </li>
            <li>
              <a>Magazine</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
