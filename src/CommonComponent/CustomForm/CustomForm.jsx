import React, { useContext, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
// import Cookies from "js-cookie";
import { DataContext } from '../../context';
// import Select from "react-select";
import generateValidationSchema from '../../component/GenrateValidationSchema/genrateValidationSchema';
import genrateInitalValues from '../../component/genrateInitialValues/InitialValues';


const CustomForms = ({ fieldsArr, route_name, title, pageFunc }) => {
    const validationSchema = generateValidationSchema(fieldsArr);
    const initialValues = genrateInitalValues(fieldsArr);
    const [button, setButton] = useState(false);
    const { handleErrorsFunc } = useContext(DataContext);
    const [fromDataTransferUser, setFromDataTransferUser] = useState();
    const selectRef = useRef();
    const handleSubmit = (values, { resetForm }) => {
        setButton(true);
        const token = 'token';
        axios.post(`${API_BASE_URL}/${route_name}/`, { ...values, fromDataTransferUser }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((value) => {
            toast.success("Successfully Updated", {
                position: "top-center"
            });
            if (pageFunc) {
                pageFunc();
            }
            resetForm();
        }).catch((err) => {
            handleErrorsFunc(err);
            console.log(err);
        }).finally(() => {
            setButton(false);
        });
    }

    return (
        <div>
            <ToastContainer />
            <div className="w-[100%] py-2">
                <div className=" mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300 ">
                    <h2 className="bg-gray-100 text-gray-700 text-3xl py-4 px-6 mb-6 font-semibold text-center">{title}</h2>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {({ values, handleSubmit, resetForm, setFieldValue, handleBlur }) => (
                            <Form>
                                <div className="mb-4 grid  gap-4 p-4">
                                    {fieldsArr?.map((element, index) => {
                                        return <>
                                        
                                        <Field
                                            type={!element.type || element.type == "number" ? "text" : element.type}
                                            name={element.name}
                                            placeholder={element.placeholder}
                                            required className="w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        />
                                    </>
                                    })}
                                </div>
                               
                <div className="mb-4 mx-5">
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 px-4 rounded hover:bg-black transition duration-300"
                    >
                        {button ? <CircularProgress size={19} color='inherit' /> : "Submit"}
                    </button>
                </div>
            </Form>
                        )}
        </Formik>
                </div >
            </div >
        </div >
    )
}

export default CustomForms

                                    