import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../../config";
import { DataContext } from "../../../context";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const ServiceDetails = () => {
  const { oneServiceData, oneServiceDetailsFunc } = useContext(DataContext);

  const { slug } = useParams();

  useEffect(() => {
    oneServiceDetailsFunc(slug);
  }, []);

  if (!oneServiceData) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Helmet>
      <title>{slug}</title>
      <meta name="description" content={oneServiceData.meta_description} />
    </Helmet>
    <div className="grid md:grid-cols-3 gap-10 grid-cols-1 m-4">
      {
          <>
            <div>
              <img src={`${API_BASE_URL}${oneServiceData.image}`} className={"h-[40vh] w-full"}/>
              {console.log(oneServiceData.image)}
              <br />
              <span className="font-semibold text-gray-700">
                {" "}
                {oneServiceData.title}
              </span>
              <br />
              <span>{oneServiceData.description.substring(0, 70)}...</span>
            </div>
          </>
       }
    </div>
    </>
  );
};

export default ServiceDetails;
