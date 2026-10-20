import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Panel from "./components/Panel";
import KartuMenu from "./components/KartuMenu";

function App() {
  const [count, setCount] = useState(0);

  var jam = 9;

  const styleObject = {
    color: "rgba(80, 80, 255, 1)",
    fontSize: "20px"
  }

  const dataMakanan = [
    {nama: "Nasi Ayam Geprek", harga: 12500},
    {nama: "Es Teh Lemon", harga: 6000, kategori: "Minuman"},
    {nama: "Mie Goreng Telur", harga: 15000, kategori: "Makanan"}
  ]

  return (
    <>
      <h1 className="judul" style={styleObject}>Kantin Jeremy</h1>
      <p>Saldo awal kartu kantin: Rp25.000</p>
      <p>{jam < 12 ? "Selamat pagi" : "Selamat siang"}</p>
      <button disabled>Bayar</button>
      {/* <Panel children={dataMakanan} judul="Menu Hari Ini"></Panel> */}
      <Panel judul="Menu Hari Ini">
        {dataMakanan.map((e) => (
          <KartuMenu
            key={e.nama}
            nama={e.nama}
            harga={e.harga}
            kategori={e.kategori}
          />
        ))}
      </Panel>
    </>
  );
}

export default App;
