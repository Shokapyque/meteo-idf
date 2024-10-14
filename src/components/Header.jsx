"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    const search = e.target[0].value;
    console.log(search);
    router.push(`/${search}`);
    
  };
  return (
    <header>
      <div className="header-container">
        <div className="logo-section">
          <Link href="/"> <Image src={"/img/favicon.png"} alt="Logo" width={50} height={50} /></Link> 
          <h1 className="page-title" href="/">Météo-IDF</h1>
        </div>

          <form className="search-bar" onSubmit={onSubmit}>
            <input type="text" placeholder="Rechercher une ville..." />
            <button type="submit">Rechercher</button>
          </form>
        </div>
    </header>
  );
};

export default Header;
