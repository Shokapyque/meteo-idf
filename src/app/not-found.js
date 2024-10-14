import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <body>
            <Header/>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>404 - Page inconnue</h1>
                <p>Nous avons demandé à tout le monde, mais personne n'a entendu parler de cette ville...</p>
                <p>L'avez-vous inventée ?</p>
                <Link href="/">
                    <button style={{ display: 'inline-block', marginTop: '50px', padding: '10px 20px', backgroundColor: '#0070f3', color: '#fff', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
                        Retour à l'accueil
                    </button>
                </Link>
            </div>
            <Footer/>
        </body>
    );
};

export default NotFound;