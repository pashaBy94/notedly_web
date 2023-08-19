import { Formik } from 'formik';
import React from 'react';

const SignUp = ({ signUp }) => {
  return (
    <div className=" bg-gray-100 p-4 rounded-lg text-[#333] shadow-md sw:w-[450px] mx-auto lg:w-[700px] lg:p-5">
      <h2 className=" text-[24px] font-bold text-center mb-5">
        Sign Up - Notedly.
      </h2>
      <Formik
        initialValues={{ username: '', password: '', email: '' }}
        onSubmit={(values, actions) => {
          signUp({
            variables: { ...values },
          });
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col content-center lg:px-6"
          >
            <input
              className=" outline-sky-200 mb-5 py-3 px-2 text-[20px] rounded-md"
              required={true}
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Name"
              value={formik.values.name}
              name="username"
              id="username"
            />
            <input
              className="outline-sky-200 mb-5 py-3 px-2 text-[20px] rounded-md"
              required={true}
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <input
              className="outline-sky-200 mb-5 py-3 px-2 text-[20px] rounded-md"
              required={true}
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
              value={formik.values.password}
              name="password"
              id="password"
            />
            {formik.errors.username && (
              <div id="feedback">{formik.errors.username}</div>
            )}
            <button
              className=" font-bold mb-5 py-3 px-2 text-[20px] rounded-md bg-gray-200 hover:shadow-sm hover:shadow-sky-200 hover:text-sky-400 active:shadow-none active:text-sky-300 active:bg-gray-300 "
              type="submit"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default SignUp;
