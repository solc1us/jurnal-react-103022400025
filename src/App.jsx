import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  var jam = 9;

  return (
    <>
      <h1 className="judul">Kantin Jeremy</h1>
      <p>Saldo awal kartu kantin: Rp25.000</p>
      <p>{jam < 12 ? "Selamat pagi" : "Selamat siang"}</p>
      <button disabled>Bayar</button>
    </>
  );
}

export default App;
