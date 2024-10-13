// app/not-found/page.js
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404 - Page Non Trouvée</h1>
            <p>Désolé, la page que vous recherchez n'existe pas.</p>
            <Link href="/">
                <a>Retourner à la page d'accueil</a>
            </Link>
        </div>
    );
};

export default NotFoundPage;
