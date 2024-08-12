import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { Field, Form, Formik } from 'formik';
import { CircularProgress } from '@mui/material';
import addServiceArr from './AddServicesArr';
import genrateInitalValues from '../../../component/genrateInitialValues/InitialValues';
import generateValidationSchema from '../../../component/GenrateValidationSchema/genrateValidationSchema';

const AddService = () => {

  const validationSchema = generateValidationSchema(addServiceArr);
  const initialValues = genrateInitalValues(addServiceArr);
  const [button, setButton] = useState();

  return (
    <div>
      <ToastContainer />
      <div className="w-[100%] py-10 bg-blue-50">
        <div className="sm:w-[70%] w-[90%] mt-10  mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300 ">
          <h2 className="bg-gray-100 text-gray-700 text-3xl py-4 px-6 mb-6 font-semibold text-center">Add Services</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={() => {

            }}
            validationSchema={validationSchema}
          >
            {({ values, handleSubmit, resetForm, setFieldValue, handleBlur }) => (
              <Form>
                <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-4 p-4">
                  {addServiceArr?.map((element, index) => {
                    return (
                      <>
                        <div className={"w-full relative col-span-1 "}>
                          {element.icon}
                          <Field
                            as={element.type == "textarea" ? "textarea" : null}
                            type={!element.type || element.type == "number" ? "text" : element.type}
                            name={element.name}
                            placeholder={element.placeholder}
                            required={element.required ? true : false}
                            onChange={(e) => {
                              setFieldValue(element.name, e.target.value);
                              if (element.name == 'title') {
                                setFieldValue('slug', e.target.value.toLowerCase()
                                  .trim()
                                  .replace(/[^a-z0-9\s-]/g, '')
                                  .replace(/\s+/g, '-')
                                  .replace(/-+/g, '-'));
                              }
                            }}
                            className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                          />
                        </div>
                      </>
                    )
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
        </div>
      </div>
    </div>
  )
}

export default AddService
