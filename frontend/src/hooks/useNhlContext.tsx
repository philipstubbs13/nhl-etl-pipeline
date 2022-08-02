import { NhlContext } from "../context/NhlContext";
import { useContext } from "react";
import { INhlContext } from "../context/NhlContext.types";

export const useNhlContext = (): INhlContext => {
  const context = useContext(NhlContext);

  if (!context) {
    throw Error("useNhlContext must be used inside a NhlContextProvider");
  }

  return context;
};
