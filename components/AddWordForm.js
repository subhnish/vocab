import React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@material-ui/core';
import styles from "../styles/AddWordForm.module.css"

 const AddWordForm = (props) => {
   return(
   <div>
     <h1>{props.title}</h1>
     <Formik
       initialValues={{ word: ''}}
       validate={values => {
         const errors = {};
         if (!values.word) {
           errors.email = 'Required';
         }
         return errors;
       }}
       onSubmit={async (values, { setSubmitting }) => {
           await props.handleSubmit(values.word);
           setSubmitting(false);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <div><p style={{marginBottom: `${2}px`}}>New Word</p><Field type="word" name="word" class={styles.inputField}/></div>
           <ErrorMessage name="word" component="div" />
           <Button onClick={props.closeForm} style={{margin: "0.5rem"}} variant="contained" color="white" disabled={isSubmitting}>
        Cancel
      </Button>
           <Button style={{margin: "0.5rem"}} variant="contained" color="primary" type="submit" disabled={isSubmitting}>
        Submit
      </Button>
         </Form>
       )}
     </Formik>
   </div>
  )};
 
 export default AddWordForm;