import { NhlContext } from "../context/NhlContext";
import { useContext } from "react";

export const useNhlContext = () => {
  const context = useContext(NhlContext);

  if (!context) {
    throw Error("useNhlContext must be used inside a NhlContextProvider");
  }

  return context;
};
