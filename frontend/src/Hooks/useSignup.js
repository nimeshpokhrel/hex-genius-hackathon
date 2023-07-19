import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signupClient = async (
    firstName,
    lastName,
    email,
    password,
    street,
    city,
    phone
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/client/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        street,
        city,
        phone,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: "SIGNUP", payload: data });
      setIsLoading(false);
    }
  };

  const signupWorker = async (
    firstName,
    lastName,
    email,
    password,
    street,
    city,
    phone,
    service
  ) => {
    setIsLoading(true);
    setError(null);

    console.log(typeof service)

    const response = await fetch("http://localhost:4000/worker/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        street,
        city,
        phone,
        service,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: "SIGNUP", payload: data });
      setIsLoading(false);
    }
  };

  return { signupClient, signupWorker, isLoading, error, setError };
};
