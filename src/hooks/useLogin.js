import { useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

const useLogin = (loginRequest) => {
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  //   const [loginResponse, setLoginResponse] = useState({
  //     id: null,
  //     username: null,
  //     email: null,
  //     firstName: null,
  //     lastName: null,
  //     gender: null,
  //     image: null,
  //     token: null,
  //   });
 
  const LoginHandler = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: loginRequest.username,
          password: loginRequest.password,
        }),
      });
      const data = await response.json();
      sessionStorage.setItem("token", data.token);
      //   setLoginResponse(data);
      navigate("/home/dashboard", { replace: true, state: data });
      console.log(data);
      setLoading(false);
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
    // console.log(loginRequest);
  };
  return { loading, LoginHandler };
};

export default useLogin;
