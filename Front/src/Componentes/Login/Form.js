import React, { useState, useEffect } from "react";
import Message from "../Message/Message";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/user/userActions";
import { useNavigate } from "react-router-dom";
import { FaGlobeAmericas } from "react-icons/fa";
import { format } from "date-fns/esm";

import { Dialog } from "@headlessui/react";
import Modal from "./Modal";

const Form = () => {
  let [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate({ pathname: `/home` });
    }
  }, [navigate, userInfo]);

  return (
    <div className="mt-4 mb-4">
      {error && <Message> {error} </Message>}
      {loading ? (
        <Loader />
      ) : (
        <div className=" mt-10 bg-gray flex flex-col justify-center  px-6 lg:px-8">
          {/*  Header */}
          <div className="sm:mx-auto sm:w-full sm-max-w-md">
            <div className="container flex items-center justify-center">
              <h2 className="ml-8 font-serif text-blue-500 text-bold">
                {" "}
                ERP COMPRAS{" "}
              </h2>
              <FaGlobeAmericas className=" ml-2 text-blue-500 h-8 w-auto" />
            </div>

            <h2 className="mt-6 text-center text-2xl font-bold  text-gray-900">
              Login
            </h2>
            <p className="mt-4  text-center text-sm text-gray-600 max-w">
              Não tem Conta?
              <Link
                to="/register"
                className=" ml-2 font-medium text-blue-600 hover:text-blue-500
       focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Criar Conta
              </Link>
            </p>
            <div className="text-center mt-8 bg-green-200 rounded-md ">
              <span className="font-bold"> Email</span>: user@gmail.com <br />
              <span className="font-bold"> Senha: </span> 123456
            </div>
          </div>

          {/* Form */}
          <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-6  rounded-lg sm:px-10">
              <form className="mb-0 space-y-6" onSubmit={submitHandler}>
                <div>
                  <label
                    for="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                   focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg
                   focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent 
                 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 
                 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                 focus:ring-indigo-500"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
