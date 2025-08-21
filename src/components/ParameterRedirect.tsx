import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const ParameterRedirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const page = searchParams.get("page");

    if (page) {
      // Remove the page parameter from URL and navigate to the correct route
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete("page");

      const queryString = newSearchParams.toString();
      const redirectPath = `/${page}${queryString ? `?${queryString}` : ""}`;

      // Navigate to the correct page
      navigate(redirectPath, { replace: true });
    }
  }, [searchParams, navigate]);

  return null; // This component doesn't render anything
};
