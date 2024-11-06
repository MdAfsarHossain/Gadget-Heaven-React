import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import GadgetsContainer from "../components/GadgetsContainer";

const Home = () => {
  // const allProducts = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Home | Gadget Heaven</title>
      </Helmet>

      {/* Banner */}
      <Banner></Banner>

      {/* Gadgets */}
      <GadgetsContainer></GadgetsContainer>
    </div>
  );
};

export default Home;
