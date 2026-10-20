import KartuMenu from "./KartuMenu";

function Panel({judul, children}) {
  return (
    <div className="panel">
      <h1>{judul}</h1>
      {children}
      {/* <KartuMenu
        nama="Nasi Ayam Geprek"
        harga="12500"
      ></KartuMenu>
      <KartuMenu
        nama="Es Teh Lemon"
        harga="6000"
        kategori="Minuman"
      ></KartuMenu>
      <KartuMenu
        nama="Mie Goreng Telur"
        harga="12000"
        kategori="Makanan"
      ></KartuMenu> */}
    </div>
  );
}

export default Panel;
