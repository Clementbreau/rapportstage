import React, { useState, useEffect } from 'react';
import { Redirect } from '@docusaurus/router'; // 👈 On utilise le vrai routeur de Docusaurus

export default function Home() {
    const [authenticated, setAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const isAuth = localStorage.getItem('authenticated');
        if (isAuth === 'true') {
            setAuthenticated(true);
        }
        setLoading(false); // Évite les flashs d'affichage le temps de lire le localStorage
    }, []);

    const handleLogin = () => {
        if (passwordInput === 'lestournesolsVG') {
            localStorage.setItem('authenticated', 'true');
            setAuthenticated(true);
        } else {
            alert('Mot de passe incorrect');
        }
    };

    if (loading) {
        return null; 
    }

    if (!authenticated) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                fontFamily: 'sans-serif',
                backgroundColor: '#f4f4f9'
            }}>
                <div style={{
                    padding: '2rem',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    maxWidth: '400px'
                }}>
                    <h1>🔒 Bienvenue !</h1>
                    <p style={{ color: '#666' }}>Veuillez entrer le mot de passe pour accéder aux documents :</p>
                    <input
                        type="password"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        placeholder="Mot de passe"
                        style={{
                            width: '100%',
                            padding: '10px',
                            margin: '10px 0',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            boxSizing: 'border-box'
                        }}
                    />
                    <button
                        onClick={handleLogin}
                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#3578e5',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        Entrer
                    </button>
                </div>
            </div>
        );
    }

    // 🌟 LA CORRECTION EST ICI : Si authentifié, on redirige proprement via Docusaurus
    // Cela évite la 404 de GitHub Pages et conserve la sidebar et le CSS !
    return <Redirect to="/introduction" />;
}