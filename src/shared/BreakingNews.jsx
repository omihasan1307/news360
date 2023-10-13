import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="max-w-screen-2xl mx-auto my-10">
      <div className="flex lg:px-0 px-5">
        <button className="  btn bg-basicColor text-white ">
          Breaking News
        </button>
        <Marquee pauseOnHover={true} speed={100}>
          <p className="text-basicColor ">
            World Cup: Adjusting to variety of surfaces in India is huge
            challenge for all teams, says Kane Williamson
          </p>
        </Marquee>
        {/* <Marquee pauseOnHover={true} speed={100}>
          <Link className="mr-12" to="/">
            I can be a React component, multiple React components.....
          </Link>
          <Link className="mr-12" to="/">
            I can be a React component, multiple React components.....
          </Link>
          <Link className="mr-12" to="/">
            I can be a React component, multiple React components.....
          </Link>
        </Marquee> */}
      </div>
    </div>
  );
};

export default BreakingNews;
