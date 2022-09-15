import React from "react";
import Review from "./Review";
// import { BsGithub } from "react-icons";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our revies</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
