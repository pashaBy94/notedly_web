import { Formik } from 'formik';
import React from 'react';

const NewNote = ({newNote}) => {
  return (
    <div className=" relative bg-gray-100 p-4 rounded-lg text-[#333] shadow-md w-full mx-auto lg:p-5 h-full">
      <h2 className=" text-[24px] font-bold text-center mb-5">
        New Note - Notedly.
      </h2>
      <Formik
        initialValues={{ content: '' }}
        onSubmit={(values, actions) => {
            newNote({variables: { ...values }})
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col content-center lg:px-6 h-full"
          ><textarea 
          className=" outline-sky-200 mb-5 py-3 px-2 text-[20px] rounded-md h-[70%]"
          required={true}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Content"
          value={formik.values.name}
          name="content"
          id="content">
          </textarea>
            <button
              className=" font-bold mb-5 py-3 px-2 text-[20px] rounded-md bg-gray-200 hover:shadow-sm hover:shadow-sky-200 hover:text-sky-400 active:shadow-none active:text-sky-300 active:bg-gray-300 "
              type="submit"
              >
              Add in my notes.
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default NewNote;
