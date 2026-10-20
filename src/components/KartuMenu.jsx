import { useState } from "react";
import LabelHarga from "./LabelHarga";

function KartuMenu({ nama, harga, kategori }) {
  const [jumlah, setJumlah] = useState(0);

  const [catatan, setCatatan] = useState("");

  console.log(catatan)

  function tambah() {
    setJumlah(jumlah + 1);
  }

  const subtotal = jumlah * harga;

  const badge = <p className="badge">Pesanan banyak</p>

  return (
    <div className="kartu">
      <h3>{nama}</h3>
      <p>{kategori || "Makanan"}</p>
      <LabelHarga nilai={harga}></LabelHarga>
      <div className="kontrol">
        <button disabled={jumlah <= 0} onClick={() => setJumlah(jumlah - 1)}>
          -
        </button>
        <p>{jumlah}</p>
        <button onClick={tambah}>+</button>
      </div>
      {jumlah == 0 ? "Belum dipesan" : "Subtotal: Rp " + subtotal}
        <br></br>
      {jumlah >= 5 && badge}
      <br></br>
      <label>Catatan pesanan: </label>
      <input type="text" onChange={setCatatan}></input>
      
      <p>{catatan != "" && "Catatan: " + catatan}</p>
    </div>
  );
}

export default KartuMenu;
