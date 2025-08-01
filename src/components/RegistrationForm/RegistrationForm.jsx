import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { ModalContext } from "./ContextClose&openModal";
import { IoClose } from "react-icons/io5";
import { useModal } from "../ModalMessage/ModalMessage";
const RegistrationForm = () => {
  const { openModal, valueOpenModal } = useContext(ModalContext);
  const {showModal} = useModal()
  return (
    <Formik
      initialValues={{
        Username: "",
        email: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};

        if (!values.Username) {
          errors.Username = "Please write username!";
        }

        if (!values.email) {
          errors.email = "Please write email";
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(values.email)) {
            errors.email = "Email is incorrect";
          }
        }

        if (!values.password) {
          errors.password = "Please write password";
        } else if (values.password.length < 7) {
          errors.password = "Password must contain 7 characters.";
        }
        return errors;
      }}
      onSubmit={(values) => {
        localStorage.setItem("Users", JSON.stringify(values));
        showModal("Registration is successfully!");
        valueOpenModal();
      }}
    >
      {() => (
        <div className="Background" style={{ display: openModal ? "flex" : "none" }}>
          <Form className="Form">
            <button className="Background_close" onClick={valueOpenModal}>
              <IoClose />
            </button>
            <h3 className="Form_signUpText">Sign up</h3>
            <label>
              Username
              <Field name="Username" placeholder="Username" className="Form_nameInput" />
            </label>
            <ErrorMessage name="Username" component="p" className="Form_errorUser errorInformation" />
            <label>
              Email
              <Field name="email" placeholder="Email" className="Form_emailInput" />
            </label>
            <ErrorMessage name="email" component="p" className="Form_errorEmail errorInformation" />
            <label>
              Password
              <Field name="password" placeholder="Password" type="password" className="Form_passwordInput" />
            </label>
            <ErrorMessage name="password" component="p" className="Form_errorPassword errorInformation" />
            <button type="submit" className="Form_button">Sign up</button>
            <label className="Form_loginLink">
              Already have an account?
              <a href="#">Log In</a>
            </label>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegistrationForm;
