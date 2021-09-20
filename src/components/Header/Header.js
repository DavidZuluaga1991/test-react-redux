import React from 'react';
import './header.scss';

function Header() {
    return (
        <header>
            <div className="wrapper">
                <div className="logo">Test</div>

                <nav>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Usuario
                        </li>
                    </ul>                    
                </nav>
            </div>
        </header>
    )
}

export default Header
