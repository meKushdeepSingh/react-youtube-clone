import type { FC } from "react";
import { Header, NavBar } from "../../common";

const Home: FC = () => {
  return (
    <div className="flex flex-col h-screen bg-background text-white">
      {/* Header */}
      <Header />

      <div className="flex-1 flex flex-row">
        {/* NavBar */}
        <NavBar />

        {/* Content */}
        <div className="flex-1 p-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
          <p className="text-lg">This is a simple home page component.</p>
        </div>
      </div>
    </div>
  );
};

export { Home };
