import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function SignUp() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const signupSchema = Yup.object({
    firstname: Yup.string()
      .required("First name is required")
      .min(3, "At least 3 character is required")
      .max(15, "First name should not be more than 15 characters in length"),

    lastname: Yup.string()
      .required("Last name is required")
      .min(1, "At least 1 character is required")
      .max(15, "Last name should not be more than 15 characters in length"),

    email: Yup.string().email().required("Please enter your email"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "At least 6 character is required")
      .max(15, "Password should not be more than 15 characters in length"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <>
      <div className="formDivContainer">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="formDiv">
              <h2>Sign Up</h2>
              <div className="form-input">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter your First Name"
                  values={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstname && touched.firstname ? (
                  <p style={{ color: "red" }}>{errors.firstname}</p>
                ) : null}
              </div>
              <div className="form-input">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Enter your Last Name"
                  values={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastname && touched.lastname ? (
                  <p style={{ color: "red" }}>{errors.lastname}</p>
                ) : null}
              </div>
              <div className="form-input">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email Address"
                  values={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p style={{ color: "red" }}>{errors.email}</p>
                ) : null}
              </div>
              <div className="form-input">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                  values={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p style={{ color: "red" }}>{errors.password}</p>
                ) : null}
              </div>
              <p>
                Already have an account? Click <Link to={"/login"}>here</Link>{" "}
                to Login
              </p>
              <div>
                <button type="submit" className="btn btn-info">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default SignUp;
