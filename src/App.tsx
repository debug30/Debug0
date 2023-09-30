import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//action
import {
  logoutUser,
  getGitHubAuthCode,
  setToken,
  authoriseWithGithubSuccess,
} from "./redux/register/registerActions";

import { getUserData } from "./redux/user/userActions";

import "./App.css";
import Home from "./screen/home/Home";
import NotFound from "./screen/notFound/NotFound";
import Dashboard from "./screen/dashboard/Dashboard";
import Loader from "./utils/ui/Loader";

const PREFIX = import.meta.env.VITE_LOCALSTORAGE_PREFIX;

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const { authorized, token, isLoading } = useSelector(
    (state: any) => state.register
  );
  const navigate = useNavigate();

  const authDataStr: any = localStorage.getItem(`${PREFIX}auth`);

  const authData: any = JSON.parse(authDataStr);

  let logoutTimer: any;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const authDataStr: any = localStorage.getItem(`${PREFIX}auth`);

      const authData: any = JSON.parse(authDataStr);

      if (authData?.authorised && authData?.token) {
        dispatch(setToken(authData.token));
        dispatch(authoriseWithGithubSuccess());
        dispatch(getUserData(authData.token));
        navigate("/dashboard");
      }
    }, 2000);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");
    const registeredAs = queryParams.get("registeredAs");

    if (code && registeredAs) {
      dispatch(getGitHubAuthCode(code, registeredAs));
    }
  }, []);

  useEffect(() => {
    if (authData && authData?.token && authData?.expiration) {
      const remainingTime =
        new Date(authData?.expiration).getTime() - new Date().getTime();
      logoutTimer = setTimeout(() => {
        dispatch(logoutUser());
      }, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    if (authorized && token) {
      setLoggedIn(true);
    }
  }, [authorized, token]);

  return (
    <>
      {isLoading && <Loader />}
      <Routes>
        {!loggedIn && <Route path="/" element={<Home />} />}
        {loggedIn && <Route path="/dashboard" element={<Dashboard />} />}
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/" element={<Dashboard />} /> */}
      </Routes>
    </>
  );
}

export default App;
