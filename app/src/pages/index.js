import React from 'react';
import MainMenu from './MainMenu';
import CryptoContainer from '../components/CryptoContainer';
import pages from '../css/index.scss';

export const whoops404 = ()=>(<div className= "whoops404">
    <h1>Resources Not found at {location.pathname}</h1>
    </div>
);

export const PageTemplate = ({children})=>(
<div className="page">
    <MainMenu></MainMenu>
    {children}
</div>);


export const HomePage = () =>(<div>
    <PageTemplate>
    <div>
        <section className="homePage">
            <h1> C.Currency </h1>
        </section>
        <CryptoContainer></CryptoContainer>
    </div>    
    </PageTemplate>
</div>);