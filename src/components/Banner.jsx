import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="md:px-5 h-full lg:min-h-[calc(100vh-72px)] rounded-2xl">
      <div className="bg-[#9538E2] lg:h-screen flex flex-col justify-start items-center gap-5 py-8 lg:py-14 pb-16 lg:pb-0 lg:relative rounded-b-2xl">
        <div className="text-center space-y-2">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-white">
            Upgrade Your Tech Accessorize with{" "}
          </h1>
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-white">
            Gadget Heaven Accessories
          </h1>
        </div>
        <p className="text-white px-2 md:px-5 lg:px-0 lg:w-2/4 text-center md:mb-5">
          Discover the latest gadgets designed to elevate your experience! From
          cutting-edge smart devices to must-have accessories, find everything
          you need right here.
        </p>
        <Link
          to="/dashboard"
          className="btn bg-white text-[#9538E2] rounded-3xl md:font-bold text-lg border-2 border-white hover:bg-transparent hover:border-white transition-all hover:text-white"
        >
          Shop Now
        </Link>
      </div>

      <div className="mt-10 px-5 md:px-0 lg:mt-0 lg:absolute lg:top-[480px] lg:left-[260px]">
        <div className="lg:w-[850px] lg:h-[480px] mx-auto border-2 border-white p-3 rounded-3xl backdrop-blur-3xl">
          <img className="rounded-3xl w-full h-full" src="/banner.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
