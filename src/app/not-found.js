import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

const NotFound = ({city}) => {
	return (
		<body>
			<Header/>
			<div
				style={{
					textAlign: "center",
					marginTop: "50px",
					fontFamily: "Arial, sans-serif",
					color: "#333",
				}}>
				<h1>404</h1>
				<p>
					Nous avons demandé à Magelan mais il dit ne pas connaitre votre recherche,
					l'avez-vous inventé ?
				</p>
                <a><Link href="/"> Retour à l'accueil</Link></a>
			</div>
            <Footer/>
		</body>
	);
};

export default NotFound;
