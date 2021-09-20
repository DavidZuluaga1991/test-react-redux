import React from 'react';
import './header.scss';

function Header() {
    return (
        <header>
            <div class="wrapper">
                <div class="logo">FalconMasters</div>

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
