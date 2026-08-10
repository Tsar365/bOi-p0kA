// import React from 'react';

import { useLoaderData } from "react-router";
import Banner from "../../components/banner/Banner";
import Books from "../books/Books";

const Home = () => {

  const data=useLoaderData();
  // console.log(data);

  return (
    <div>
      <Banner />
      <Books data={data} />
    </div>
  );
};

export default Home;