import type { FC } from "react";
import { Header } from "../../common";

const Home: FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg">This is a simple home page component.</p>
    </div>
  );
};

export { Home };
