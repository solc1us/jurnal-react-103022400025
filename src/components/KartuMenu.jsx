import LabelHarga from "./LabelHarga";

function KartuMenu({nama, harga, kategori}) {
    return (
        <div className="kartu">
            <h3>{nama}</h3>
            <p>{kategori || "Makanan"}</p>
            <LabelHarga nilai={harga}></LabelHarga>
        </div>
    )
}

export default KartuMenu;