import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { API_BASE_URL } from "./config";

const DataContext = createContext();

const DataProviderFuncComp = ({ children }) => {
  
    const [serviceData, setServiceData] = useState();
    const [oneServiceData, setOneServiceData] = useState();

    const serviceDetailsFunc = () => {
      axios
        .get(`${API_BASE_URL}/services/`).then((value) => {
            setServiceData(value.data);
        }).catch((err) => {
          console.log(err);
        });
    };
    
    const oneServiceDetailsFunc = (slug) => {
      axios
        .get(`${API_BASE_URL}/services/${slug}/`).then((value) => {
            setOneServiceData(value.data);
        }).catch((err) => {
          console.log(err);
        });
    };


  return (
    <DataContext.Provider
      value={{
        serviceData,
        serviceDetailsFunc,
        oneServiceData,
        oneServiceDetailsFunc
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataProviderFuncComp, DataContext };
