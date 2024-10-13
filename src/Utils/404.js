// pages/404.js

import Link from 'next/link';


const Custom404 = () => {
    return (
        <div className={styles.container}>
            <h1>404 - Page Not Found</h1>
            <p>Désolé, la page que vous cherchez n'existe pas.</p>
            <Link href="/">
                <a>Retour à l'accueil</a>
            </Link>
        </div>
    );
};

export default Custom404;