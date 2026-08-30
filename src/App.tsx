import { HashRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export const App = () => {
  return (
    <HashRouter>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
};
