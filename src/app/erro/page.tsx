import { Metadata } from 'next';
import React from 'react';
import '../reset.css';
import './erro.css';

export const metadata: Metadata = {
  title: 'Erro 404',
  icons: [{ rel: 'short icon', url: 'images/Logo.svg' } ],
}

const page: React.FC = () => {
  return <>
    <a href="/">
        <div className="brand">
            <img src="images/Logo.svg" className="logo" />
            <h1>LinkBox</h1>
        </div>
    </a>

    <section>
        <img src="images/erro 404 img.svg" className="erro" />
    </section>

    <h2>Página não encontrada!</h2>
  </>
};

export default page;
