import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const RegistrationForm=()=>{
    return(
        <div>

            <Formik
            initialValues={{
                Username:"",
                email:"",
                password:"",
            }}
            validate={value=>{
                console.log(value)
                const errors={};
                if(!value.Username){
                    errors.Username="Please write email!"
                }
            }}
            >

            </Formik>
        </div>
    )
}
export default RegistrationForm