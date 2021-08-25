import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from '../components/Feed'
const Index = () => {
  return (
    <div>
      <head>
        <title>Facebook</title>
      </head>
      <Header />
      <main className="flex bg-gray-100">
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* widget */}
      </main>
    </div>
  );
};

export default Index;
