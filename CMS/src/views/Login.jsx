import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Toastify from 'toastify-js'
import axios from 'axios'

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()
    try {
      const addedData = { email, password }
      const { data } = await axios.post(`https://server.halofarhan.my.id/login`, addedData)
      localStorage.setItem("access_token", data.access_token)
      localStorage.setItem("role", data.role)

      Toastify({
        text: "Success Login",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "#00B29F",
          color: "#17202A",
          boxShadow: "0 5px 10px black",
          fontWeight: "bold"
        }
      }).showToast();

      navigate('/')
    } catch (error) {
      console.log(error);
      // Toastify({
      //   text: error.response,
      //   duration: 2000,
      //   newWindow: true,
      //   close: true,
      //   gravity: "top",
      //   position: "left",
      //   stopOnFocus: true,
      //   style: {
      //     background: "#EF4C54",
      //     color: "#17202A",
      //     boxShadow: "0 5px 10px black",
      //     fontWeight: "bold"
      //   }
      // }).showToast();
    }
  }

  function emailOnChange(event) {
    setEmail(event.target.value);
  }

  function passwordOnChange(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <div className="w-96 px-6 py-8 md:px-8">
          <div className="flex justify-center mx-auto">
            <h1 className="font-medium text-4xl">Clutch.</h1>
          </div>
          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome Writers!
          </p>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4" />
            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              login with email
            </a>
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
          </div>

          {/* Form Login */}
          <form action="" method="post" onSubmit={handleLogin}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                onChange={emailOnChange}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Forget Password?
                </a>
              </div>
              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                onChange={passwordOnChange}
              />
            </div>

            <div className="mt-6">
              <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
          {/* End Of Form */}
        </div>
      </div>
    </>
  );
}
