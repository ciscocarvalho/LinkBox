import { Metadata } from 'next';
import React from 'react';
import '../reset.css';
import './serverError.css';

export const metadata: Metadata = {
  title: 'Server Down',
  icons: [{ rel: 'short icon', url: 'images/Logo.svg' } ],
}

const page: React.FC = () => {
  return <>
    <header>
        <img src="images/Logo.svg" className="logo" />
        <h1>LinkBox</h1>
    </header>
    <section>
        <img src="images/server_down.svg" className="erro" />
        <h1>Ocorreu algum erro no servidor!</h1>
    </section>
  </>
};

export default page;
