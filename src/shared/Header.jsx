import moment from "moment";

const Header = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="text-center">
        <h1 className=" text-6xl font-serif font-semibold mt-4 mb-2 text-basicColor">
          News 360
        </h1>
        <p className="text-slate-500 ">Journalism Without Fear or Favor</p>
        <p className=" my-2">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
    </div>
  );
};

export default Header;
