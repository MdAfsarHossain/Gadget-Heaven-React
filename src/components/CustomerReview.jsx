const CustomerReview = () => {
  return (
    <section className="my-8 ">
      <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
        <h1 className="p-4 text-4xl font-semibold leading-none text-center">
          What our customers are saying about us
        </h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        {/* Review No : 1 */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-xl">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
            <p className="relative px-6 py-1 text-lg italic text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-violet-400"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              This site has great deals and quality items! I got a fast charger
              and a smartwatch at a good price. The checkout was simple, and the
              products arrived as expected. The only downside was that I wanted
              a few out-of-stock items. But I’ll keep checking back; overall,
              I’m happy with my experience!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-violet-400"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
            <img
              src="https://i.ibb.co.com/smFpKYj/avatar-1.jpg"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  bg-gray-700"
            />
            <p className="text-xl font-semibold leading-tight">Abdur Rohim</p>
            <p className="text-sm uppercase">Aliquam illum</p>
          </div>
        </div>

        {/* Review No : 2 */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-xl">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
            <p className="relative px-6 py-1 text-lg italic text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-violet-400"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Love this website! The layout is super easy to navigate, and the
              search options helped me quickly find a power bank with all the
              features I wanted. Plus, the reviews really helped me choose the
              best one. Highly recommend this site to anyone looking for tech
              products!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-violet-400"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
            <img
              src="https://i.ibb.co.com/DRxqRZd/user-avatar-male-5.png"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  bg-gray-700"
            />
            <p className="text-xl font-semibold leading-tight">Jabed Alom</p>
            <p className="text-sm uppercase">Aliquam illum</p>
          </div>
        </div>

        {/* Review No : 3 */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-xl">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
            <p className="relative px-6 py-1 text-lg italic text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-violet-400"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Great selection of tech products! I bought a gaming laptop, and it
              performs just as described. The checkout was smooth, and I
              appreciated the detailed product specifications. Delivery was a
              bit delayed, but customer service kept me informed throughout the
              process. Overall, very satisfied with my purchase!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-violet-400"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
            <img
              src="https://i.ibb.co.com/smFpKYj/avatar-1.jpg"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  bg-gray-700"
            />
            <p className="text-xl font-semibold leading-tight">
              Tanvir Hossain
            </p>
            <p className="text-sm uppercase">Aliquam illum</p>
          </div>
        </div>

        {/* Review No : 4 */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-xl">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
            <p className="relative px-6 py-1 text-lg italic text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-violet-400"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              I had an excellent experience shopping here! The product
              descriptions are spot-on, and I could easily find everything I
              needed. The filters made it simple to compare products, and my
              items arrived on time in perfect condition. Customer support was
              also very responsive and helpful. I’ll definitely be coming back!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-violet-400"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
            <img
              src="https://i.ibb.co.com/5vN3wd8/ad8748e23079a194d938aeea07d96047.png"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-700"
            />
            <p className="text-xl font-semibold leading-tight">Akash Rahman</p>
            <p className="text-sm uppercase">Aliquam illum</p>
          </div>
        </div>
        {/* End of Review  */}
      </div>
    </section>
  );
};

export default CustomerReview;
