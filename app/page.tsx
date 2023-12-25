import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <div className="p-3 flex flex-col">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Ingrese ahora!</h1>
            <p className="py-6">
              Sistema de gestion de Bares, ordenes pedidos, todo en un mismo modulo,
              sin, pruebelo ahora
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100 p-6">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
