import CustomerReview from "../components/CustomerReview";
import TeamMember from "../components/TeamMember";

const AboutUs = () => {
  return (
    <div>
      {/* Heading */}
      <div className="bg-[#9538E2] pt-12 space-y-2 pb-36 text-center relative">
        <h1 className="text-white text-4xl font-bold">About Us</h1>
        <p className="text-gray-100 w-5/6 lg:w-4/6 mx-auto text-base">
          Passionate Innovators Dedicated to Quality and Customer Satisfaction.
          Our journey is rooted in a commitment to excellence, bringing you the
          latest innovations and exceptional service. We believe in building
          trust, fostering community, and delivering products that enhance your
          life.
        </p>
      </div>
      {/* End of Heading */}

      {/* Customer Review Section */}
      <CustomerReview></CustomerReview>
      {/* End of Customer Review Section */}

      {/* Meet our team section */}
      <TeamMember></TeamMember>
      {/* End of Meet our team section */}
    </div>
  );
};

export default AboutUs;
