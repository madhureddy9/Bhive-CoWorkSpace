import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Features from "../components/Features";
import SpaceOverview from "../components/SpaceOverview";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <Features />
      <SpaceOverview />
      <DownloadApp />
      <Footer />
    </>
  );
};

export default Home;
