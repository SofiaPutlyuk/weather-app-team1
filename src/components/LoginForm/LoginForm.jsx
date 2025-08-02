import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { ModalContext } from "../RegistrationForm/ContextClose&openModal";
import { IoClose } from "react-icons/io5";
import { useModal } from "../ModalMessage/ModalMessage";
const users=localStorage.getItem("Users")
const usersStringify=JSON.stringify(users)
const LoginForm=()=>{
    const {openLoginForm,valueOpenLoginForm}=useContext(ModalContext)
    const {showModal} = useModal()
    return(
        <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validate={(values) => {
                const errors = {};
                if (values.email !== usersStringify.email) {
                  errors.email = "Please write correct email";
                } else {
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  if (!emailRegex.test(values.email)) {
                    errors.email = "Email is incorrect";
                  }
                }
        
                if (values.password !== usersStringify.password) {
                  errors.password = "Please write password";
                } else if (values.password.length < 7) {
                  errors.password = "Password must contain 7 characters.";
                }
                return errors;
              }}
              onSubmit={() => {
                showModal("Login is successfully!");
                valueOpenLoginForm();
              }}
            >
              {() => (
                <div className="Background" style={{ display: openLoginForm ? "flex" : "none" }}>
                  <Form className="Form">
                    <button className="Background_close" onClick={valueOpenLoginForm}>
                      <IoClose />
                    </button>
                    <h3 className="Form_LoginText">Log in</h3>
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
                    <button type="submit" className="Form_button">Lig in</button>
                  </Form>
                </div>
              )}
            </Formik>
    )
}
export default LoginForm