import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ProductsContext } from "../providers/ProductsProvider";

const Statistics = () => {
  const { allProducts } = useContext(ProductsContext);

  return (
    <div>
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>
      {/* Heading */}
      <div className="bg-[#9538E2] pt-12 space-y-2 pb-32 text-center relative">
        <h1 className="text-white text-4xl font-bold">Statistics</h1>
        <p className="text-gray-100 w-5/6 md:w-4/6 mx-auto text-base">
          Explore detailed statistics on our products, customer satisfaction,
          and trends to help you make informed decisions. See how we measure up
          and discover the data behind our commitment to quality and innovation.
        </p>
      </div>
      {/* End of Heading */}

      {/* Charts */}
      <div className="py-5 m-5 font-bold text-2xl">
        <h1>Statistics:</h1>
      </div>
      <div className="bg-white border-0  m-5 rounded-2xl shadow-xl">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={allProducts}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="product_title" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="price"
              fill="#EFE1FB"
              stroke="#8884d8"
            />
            <Bar dataKey="price" barSize={20} fill="#9538E2" />
            <Line type="linearClosed" dataKey="rating" stroke="#ff7300" />
            <Scatter dataKey="product_id" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      {/* End of Charts */}
    </div>
  );
};

export default Statistics;
