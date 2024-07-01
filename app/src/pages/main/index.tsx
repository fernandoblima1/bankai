import { ModeToggle } from "@/components/ui/mode-toggle";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Card } from "@/components/ui/card";
import { useLoading } from "@/components/loading";
import Header from "@/components/header";
export default function Main() {
  const { keycloak, userInfo } = useContext(AuthContext);
  const loading = useLoading();
  useEffect(() => {
    if (!keycloak) {
      loading.show("");
    } else {
      loading.hide();
    }
  }, [userInfo]);

  return (
    <div className="">
      <Header
        name={userInfo.name}
        email={userInfo.email}
        imageUrl={"https://github.com/shadcn.png"}
      />
      <h1 className="text-4xl font-bold">Hello, Vite!</h1>
      <h4>Aplicação de Exemplo de Integração com o Pi Login</h4>
      <div className="card">
        <Card>
          <p>Username: {keycloak?.tokenParsed?.preferred_username}</p>
          <p>Email: {keycloak?.tokenParsed?.email}</p>
          <p>Access Token: {keycloak?.token}</p>
        </Card>
        <div>
          <button onClick={() => keycloak?.logout()}>Logout</button>
          <h4>Informações do usuário</h4>
          {JSON.stringify(userInfo, null, 2)}
        </div>
      </div>
      <ModeToggle />
    </div>
  );
}
