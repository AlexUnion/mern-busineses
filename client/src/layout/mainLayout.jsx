import React from "react";

const MainLayout = ({ children }) => {
  return (
    <main className="container mx-auto max-w-screen-lg pt-6">{children}</main>
  );
};

export default MainLayout;
