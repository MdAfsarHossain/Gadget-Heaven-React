const Footer = () => {
  return (
    <div className="py-20">
      <div className="pb-10 text-center flex flex-col gap-2 border-b-2">
        <h1 className="font-bold text-4xl text-[#09080F]">Gadget Heaven</h1>
        <p className="text-lg w-3/4 mx-auto lg:w-auto">
          Stay Connected with the Latest Trends and Exclusive Offers
        </p>
      </div>

      <div className="flex flex-col md:flex-row  justify-center items-center gap-5 md:gap-24 lg:gap-48 mt-10 text-center">
        <div className="">
          <h1 className="text-gray-800 font-bold text-2xl">Services</h1>
          <ul>
            <li>
              <a href=""> Product Support</a>{" "}
            </li>
            <li>
              <a href=""> Order Tracking</a>{" "}
            </li>
            <li>
              <a href=""> Shipping & Delivery</a>{" "}
            </li>
            <li>
              <a href=""> Returns</a>{" "}
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-gray-800 font-bold text-2xl">Company</h1>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li className="text-[#F7F7F7]">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-gray-800 font-bold text-2xl">Legal</h1>
          <ul>
            <li>
              <a href="">Terms of Service</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Cookie Policy</a>
            </li>
            <li className="text-[#F7F7F7]">
              <a href="">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
