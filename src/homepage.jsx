import React, { useState, useEffect } from "react";
import Preloader from "./preloader";
import "./homepage.css";
import data from "./studentsdata.json";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="here2"> <h1>hi</h1>
        <br /></div>
          

      )}
    </>
  );
};

export default Home;
