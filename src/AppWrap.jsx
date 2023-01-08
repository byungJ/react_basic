import React from 'react';

export default function AppWrap() {
    return (
        <div>
            <Navbar color='tomato'>
                <Avartar
                image='https://images.unsplash.com/photo-1673010960635-d0d1ad81b90a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
                name="Mango"
                size={100}/>
                <p>안녕하세요~~!!</p>
            </Navbar>
        </div>
    );
}

function Navbar({ children, color }) {
    return (
        <header style={{backgroundColor: color }}>
            { children }
        </header>
    );
}

function Avartar({ image, name, size }) {
    return (
        <div>
            <img src={image}
            alt = {name}
            width = {size}
            height = {size}
            style={{ borderRadius: '50%'}}/>
        </div>
    )
}
