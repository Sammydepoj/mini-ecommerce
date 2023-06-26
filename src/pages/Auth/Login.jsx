import React, { useEffect, useState } from "react";
import bgImage from "../../Assets/Images/Big_phone_with_cart.jpg";
import useLogin from "../../hooks/useLogin";
// import { Navigate } from "react-router-dom";

const Login = () => {
  const [loginRequest, setLoginRequest] = useState({
    username: null,
    password: null,
  });
  const { loading, LoginHandler } = useLogin(loginRequest);

  const inputDatas = [
    { type: "text", label: "Username" },
    { type: "password", label: "Password" },
  ];

  const setRequest = (value, key) => {
    setLoginRequest((prev) => {
      return { ...prev, [key]: value };
    });
  };
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      //   <Navigate to="home/dashboard" replace={true} />;
      window.location.href = "/home/dashboard";
    }
  }, []);

  return (
    <div className="h-[100svh] grid grid-cols-2">
      <section className="flex items-center justify-center">
        <img src={bgImage} alt="background" />
      </section>
      <section className="bg-blue-900 flex items-center justify-center ">
        <form
          className="flex flex-col gap-10 items-center justify-center"
          onSubmit={(e) => LoginHandler(e.preventDefault())}
          //   onSubmit={LoginHandler}
        >
          {inputDatas.map((data, index) => {
            return (
              <div className="grid" key={index}>
                <label htmlFor={data.label}>{data.label}</label>
                <input
                  type={data.type}
                  name={data.label}
                  id={data.label}
                  className="outline-none border-2 rounded-md border-[#000000] py-4 px-10"
                  onChange={(e) =>
                    setRequest(e.target.value, data.label.toLowerCase())
                  }
                />
              </div>
            );
          })}
          <button
            type="submit"
            className="bg-black text-white w-full rounded-md py-3 px-10 hover:scale-110"
          >
            {loading ? "loading ..." : "Login"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
