import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { useParams } from "react-router-dom";

const RocketInfo = () => {
  const { rocketsId } = useParams();
  const [rocket, setRocket] = useState();
  const getRocket = async () => {
    const { data } = await axios.get(
      `https://api.spacexdata.com/v3/rockets/${rocketsId}`
    );
    setRocket(data);
  };
  useEffect(() => {
    getRocket();
  }, []);
  rocket && console.log(rocket);
  return (
   <>
   <Navbar/>
    <div className="md:grid space-y-4 md:space-y-0 grid-cols-2 gap-2 p-4">
      {rocket &&
        rocket.flickr_images.map((image, index) => (
          <img className="w-full" key={index} src={image} />
        ))}
        <div className="flex flex-col">
        <h2 className="text-3xl font-bold">{rocket?.rocket_name}</h2>
        <p className="font-bold">{rocket?.first_flight}</p>
        <p>{rocket?.description}</p>
        <a href={rocket?.wikipedia} target="_blank" className="underline">Click to view more details</a>
</div>
    </div>
  <Footer />
    </>
  );
};

export default RocketInfo;
