import "./App.css";
import Header from "./header/Header";
import IssueList from "./IssueList/IssueList";
import Footer from "./footer/Footer";
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
