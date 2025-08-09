import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { ModalContext } from "./ContextClose&openModal";
import { IoClose } from "react-icons/io5";
import { useModal } from "../ModalMessage/ModalMessage";
const RegistrationForm = () => {
  const { openModal,valueOpenModal,ValueOpenLoginForm,authorization,RegistrationUser,userLogin,isLogin} = useContext(ModalContext);
  const {showModal} = useModal()
  // const arrayUsers=JSON.parse(localStorage.getItem("Users")) || [];
  const closeModal=()=>{
    valueOpenModal(false)
  }
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
        showModal("Registration is successfully!"); 
        valueOpenModal();
        RegistrationUser()
        if(isLogin){
          return showModal("You are already registered!"); 
        }
        userLogin()
        const existing = JSON.parse(localStorage.getItem("Users"));
        const arrayUsers = Array.isArray(existing) ? existing : [];
        arrayUsers.push(values)
        localStorage.setItem("Users",JSON.stringify(arrayUsers))
        
      }}
    >
      {() => (
        <div className="Background" style={{ display: openModal && !authorization ? "flex" : "none" }}>
          <Form className="Form">
            <button className="Background_close" onClick={closeModal}>
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
              <button className="Form_loginLink_link" onClick={ValueOpenLoginForm}>
              <a href="#">Log In</a>
              </button>
            </label>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegistrationForm;
