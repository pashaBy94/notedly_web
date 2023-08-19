import { Formik } from 'formik';
import React from 'react';

const EditNote = ({setIsEdit}) => {
  return (
    <Formik 
    initialValues={{ content: '' }} 
    onSubmit={(values, actions) => {
        console.log(111111111);
    }} 
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col content-center lg:px-6"
        >
          <textarea
            className="outline-sky-400 border-2 border-sky-200 mb-5 py-3 px-2 text-[20px] rounded-2xl min-h-[150px]"
            required={true}
            type="content"
            name="content"
            id="content"
            onChange={formik.handleChange}
            onBlur={(e)=>{
                formik.handleBlur(e);
                setIsEdit(false);
            }
            }
            value={formik.values.email}
          ></textarea>
          <button
            className=" font-bold mb-5 py-3 px-2 text-[20px] rounded-md bg-gray-200 hover:shadow-sm hover:shadow-sky-200 hover:text-sky-400 active:shadow-none active:text-sky-300 active:bg-gray-300 "
            type="submit"
          >
            Edit note
          </button>
        </form>
      )}
    </Formik>
  );
};
export default EditNote;
