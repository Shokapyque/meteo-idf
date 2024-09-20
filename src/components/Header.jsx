import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-section">
          <Image src={"/img/favicon.png"} alt="Logo" width={50} height={50} />
          <h1 className="page-title">Météo-IDF</h1>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Rechercher une ville..." />
          <button type="submit">Rechercher</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
