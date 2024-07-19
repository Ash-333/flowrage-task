import React from "react";
import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addFormData } from "../app/contactSlice";

const Contact = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required").trim(),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    message: yup.string().required("Please enter your message"),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form submitted:", values);
    dispatch(addFormData(values));
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Contact Me</h1>
      <p className="text-center">Here's how you can get in touch with me...</p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col items-center p-8">
            <Field
              className="w-3/6 p-2 border border-slate-400 mb-4 rounded-lg"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="error text-red-600"
            />

            <Field
              className="w-3/6 p-2 border border-slate-400 mb-4 rounded-lg"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email address"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error text-red-600"
            />

            <Field
              className="w-3/6 p-2 h-48 border border-slate-400 mb-4 rounded-lg"
              name="message"
              id="message"
              as="textarea"
              placeholder="Enter your message"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="error text-red-600"
            />

            <button
              className="bg-slate-600 w-3/6 rounded-lg p-2 font-semibold text-white"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
