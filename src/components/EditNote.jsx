import { Formik } from 'formik';
import React from 'react';

const EditNote = ({ setIsEdit, content, editNote, id }) => {
  return (
    <Formik
      initialValues={{ content }}
      onSubmit={(values, actions) => {
        if (content !== values.content) {
          setIsEdit(false);
          editNote({
            variables: {
              id,
              content: values.content,
            },
          });
        } else {
          setIsEdit(false);
        }
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
            type="text"
            name="content"
            id="content"
            onChange={(e) => {
              formik.handleChange(e);
              console.log(e.target.value);
            }}
            value={formik.values.content}
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
