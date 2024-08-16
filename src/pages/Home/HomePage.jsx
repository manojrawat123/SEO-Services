import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import { DataContext } from "../../context";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const { serviceData, serviceDetailsFunc } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    serviceDetailsFunc();
  }, []);

  if (!serviceData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid md:grid-cols-3 gap-10 grid-cols-1 m-4">
      {serviceData?.service?.map((element, index) => {
        return (
          <>
            <div onClick={()=>{
                navigate(`/services/${element.slug}`)
            }} className="cursor-pointer">
              <img src={`${API_BASE_URL}${element.image}`} className={"h-[40vh] w-full"}/>
              {console.log(element.image)}
              <br />
              <span className="font-semibold text-gray-700">
                {" "}
                {element.title}
              </span><br/>
              <span>{element.description.substring(0, 70)}...</span>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default HomePage;
