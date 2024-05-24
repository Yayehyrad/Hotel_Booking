import { useQuery } from "react-query";
import { validateToken } from "../api-client";

function useIsLogedIn(): { isLoggedIn: boolean } {
  const { isError } = useQuery("validateToken", validateToken, {
    retry: false,
  });
  console.log(isError);
  return { isLoggedIn: !isError };
}

export default useIsLogedIn;
