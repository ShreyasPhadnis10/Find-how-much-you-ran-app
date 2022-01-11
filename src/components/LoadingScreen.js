import React, { useContext, useEffect } from "react";
import { Context as RegisterContext } from "../../Context/RegisterContext";

export default function LoadingScreen() {
  const { automaticLogin } = useContext(RegisterContext);

  useEffect(() => {
    automaticLogin();
  }, []);
  return null;
}
