import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import Container from "@/components/Container";
import Footer from "@/components/footer";


export default function Home() {
  
  return (
    <body>
    <Header/>
    <Container/>
    <Footer/>
    </body>
  );
}
