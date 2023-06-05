import "./App.css";
import Header from "./components/header/Header";
import IssueList from "./components/IssueList/IssueList";
import Footer from "./components/footer/Footer";
import { useEffect, useState, useRef } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <IssueList />
      <Footer />
    </div>
  );
}

export default App;
