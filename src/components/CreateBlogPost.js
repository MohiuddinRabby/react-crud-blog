import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { saveBlogPost } from "../api";

// Validation schema
const validationSchema = Yup.object().shape({
  blogTitle: Yup.string().required("Title required"),
  blogPost: Yup.string().required("Post Details required"),
  blogAuthorName: Yup.object().shape({
    label: Yup.string().required("Author Name required"),
    value: Yup.string().required("Author Name required"),
  }),
});
const initialValues = {
  blogTitle: "",
  blogPost: "",
  blogAuthorName: "",
};
const CreateBlogPost = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const saveData = {
            title: values.blogTitle,
            body: values.blogPost,
            author: values.blogAuthorName.label,
          };
          saveBlogPost(saveData);
          resetForm();
        }}
      >
        {({ values, setFieldValue, isValid }) => (
          <>
            <Form>
              <div className="container">
                <div className="form-group row py-5">
                  <div className="col-lg-12 py-2">
                    <label>Blog Title</label>
                    <Field
                      className="form-control"
                      name="blogTitle"
                      placeholder="Blog Title"
                      value={values?.blogTitle}
                    />
                    <div className="text-danger">
                      <ErrorMessage name="blogTitle" />
                    </div>
                  </div>
                  <div className="col-lg-12 py-2">
                    <div className="form-group">
                      <label>Blog Post</label>
                      <Field
                        className="form-control"
                        rows="3"
                        name="blogPost"
                        placeholder="Write Blog here"
                        value={values?.blogPost}
                      ></Field>
                    </div>
                    <div className="text-danger">
                      <ErrorMessage name="blogPost" />
                    </div>
                  </div>
                  <div className="col-lg-12 py-2">
                    <div className="form-group">
                      <label>Blog Author</label>
                      <Select
                        className="form-control"
                        name="blogAuthorName"
                        onChange={(valueOption) => {
                          setFieldValue("blogAuthorName", valueOption);
                        }}
                        options={[
                          { value: 1, label: "luigi" },
                          { value: 2, label: "yoshi" },
                        ]}
                        value={values?.blogAuthorName}
                      />
                      <div className="text-danger">
                        <ErrorMessage name="blogAuthorName" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 py-2">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      disabled={!isValid}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default CreateBlogPost;
