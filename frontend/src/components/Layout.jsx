//src/components/Layout.jsx
import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout({ children }) {
  return (
    <div className="app-root">
      <Header />
      <main className="app-main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
 