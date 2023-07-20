import { useAuthContext } from "./useAuthContext";

export const useValidate = () => {
  const { dispatch } = useAuthContext();

  const validateClient = async (token) => {
    const response = await fetch("http://localhost:4000/client/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: "VALIDATE", payload: data });
    }
  };

  return { validateClient };
};
