import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { ModalContext } from "../RegistrationForm/ContextClose&openModal";
import { IoClose } from "react-icons/io5";
import { useModal } from "../ModalMessage/ModalMessage";
const LoginForm=()=>{
    const {ValueOpenLoginForm,authorization,userLogin,valueOpenModal}=useContext(ModalContext)
    const {showModal} = useModal()
    const closeModal=()=>{
      ValueOpenLoginForm(false)
      valueOpenModal(false)

    }
    return(
        <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validate={(values) => {
                const errors = {};
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(values.email)) {
                  errors.email = "Email is incorrect";
                }
                if (values.password.length < 7) {
                  errors.password = "Password must contain 7 characters.";
                }
                return errors;
              }}
              onSubmit={() => {
                ValueOpenLoginForm(false)
                valueOpenModal(false)          
                userLogin()
                showModal("Login is successfully!");
              }}
            >
              {() => (
                <div className="Background" style={{ display: authorization ? "flex" : "none" }}>
                  <Form className="Form">
                    <button className="Background_close" onClick={closeModal}>
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
                    <button type="submit" className="Form_button">Log in</button>
                  </Form>
                </div>
              )}
            </Formik>
    )
}
export default LoginForm