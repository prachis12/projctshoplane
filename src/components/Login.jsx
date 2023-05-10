import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const loginSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <>
      <div className="formDivContainer">
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <div className="formDiv">
              <h2>LOGIN</h2>
              <div className="form-input">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  value={values.email}
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
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p style={{ color: "red" }}>{errors.password}</p>
                ) : null}
              </div>
              <p>
                Don't have an account? Click <Link to={"/signup"}>here</Link> to
                sign up{" "}
              </p>
              <div>
                <button type="submit" className="btn btn-info">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
