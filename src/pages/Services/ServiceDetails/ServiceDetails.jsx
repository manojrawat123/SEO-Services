import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../../config";
import { DataContext } from "../../../context";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import QuickInquiryForm from "./QuickInquiryForm/QuickInquiryForm";

const ServiceDetails = () => {
  const { oneServiceData, oneServiceDetailsFunc } = useContext(DataContext);

  const { slug } = useParams();

  useEffect(() => {
    oneServiceDetailsFunc(slug);
  }, []);

  if (!oneServiceData) {
    return <div>Loading...</div>;
  }
console.log(oneServiceData);

  return (
    <div className="bg-gray-100">
<h1 className="text-center font-bold text-2xl bg-orange-200 py-4">{oneServiceData.service.title}</h1>
      <Helmet>
        <title>{slug}</title>
        <meta name="description" content={oneServiceData.service.meta_description} />
      </Helmet>
      <div className="md:grid-cols-3 grid md:gap-10 grid-cols-1 md:mx-[3%] bg-white  shadow-lg p-4">
        <div className="col-span-2">
          {
            <>
              <div>
                <img
                  src={`${API_BASE_URL}${oneServiceData.service.image}`}
                // className={"h-[40vh] w-auto"}
                />
                <br />
                <span className="font-semibold text-gray-900 text-lg">
                  {" "}
                  {oneServiceData.service.title}
                </span>
                <br />
                <div
                className="text-gray-700 font-medium"
                  dangerouslySetInnerHTML={{
                    __html: oneServiceData.service.description
                  }}
                />
              </div>
            </>
          }
        </div>

        {/* Second Section */}
        <div>
          {/* Get In touch Form */}
          <QuickInquiryForm />

          {/* Suggested Services */}
          <div className="bg-white shadow-xl rounded p-4">
          <h1 className="bg-gray-100 text-xl text-center p-4 mb-4 font-semibold">All Services</h1>
          {oneServiceData.suggested_service.map((element) => {
            return <>
            <div className="grid grid-cols-5 gap-5 my-3">
              <img
                src={`${API_BASE_URL}${element.image}`}
                className="w-full h-[5rem] col-span-2"
                alt=""
              />
              <h1
                className="text-gray-700 font-semibold col-span-3"
              >
                {element.title}
              </h1>
            </div>
            <hr />
            </>
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
