import React from "react";
import { useRouteError } from "react-router-dom";

type Error = {
  statusText: string;
  message: string;
};

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Desculpe, um erro inesperado aconteceu</p>
      <p>
        <i>{error.statusText == "Not Found" ? "Página não encontrada" : ""}</i>
      </p>
    </div>
  );
}
