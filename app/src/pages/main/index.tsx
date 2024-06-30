import { ModeToggle } from "@/components/ui/mode-toggle";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
export default function Main() {
  const { keycloak, userInfo } = useContext(AuthContext);

  if (!keycloak) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <h1 className="text-4xl font-bold">Hello, Vite!</h1>
      <h4>Aplicação de Exemplo de Integração com o Pi Login</h4>
      <div className="card">
        <div>
          <p>Username: {keycloak?.tokenParsed?.preferred_username}</p>
          <p>Email: {keycloak?.tokenParsed?.email}</p>
          <p>Access Token: {keycloak?.token}</p>
          <button onClick={() => keycloak?.logout()}>Logout</button>
        </div>
        <div>
          <h4>Informações do usuário</h4>
          {JSON.stringify(userInfo, null, 2)}
        </div>
      </div>

      <ModeToggle />
    </div>
  );
}
