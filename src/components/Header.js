import React from "react";

const Header = () => {
    return (
        <header className="animated fadeInDown">
            <div className="grid">
                <div className="unit half center-on-mobiles">
                    <h1>
                        <a href="https://kyleines.github.io">
                            <div className="avatar">
                                <img src="my-pic.jpg" alt="Kyle Ines" />
                            </div>
                            <div className="id">
                                <span className="name">Kyle Ines</span>
                                <span className="handle">@kyleines</span>
                            </div>
                        </a>
                    </h1>
                </div>
                <nav className="unit half align-right center-on-mobiles">
                    <ul className="contact">
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kyleines/"><i className="fab fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://github.com/kyleines"><i className="fab fa-github"></i></a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://teamtreehouse.com/kyleines">
                                <svg className="treehouse-svg" alt="Treehouse" aria-hidden="true" preserveAspectRatio="xMinYMin meet" viewBox="0 1 30 30">
                                    <path d="M26.5 5.9c-1.1-0.6-2.8 0.4-3.9 2.2l-1.9 3.2c-0.7 1.3-0.6 3 0.3 4.2l0.1 0.1c0.9 1.2 2.1 2.4 2.4 2.8 0.2 0.2 0.4 0.5 0.5 0.9 0.3 1.1-0.3 2.3-1.5 2.6 -1.1 0.3-2.3-0.3-2.7-1.5 -0.1-0.3-0.1-0.6-0.1-0.8 0.1-0.5-0.1-1.2-0.8-2 -0.7-0.7-2.1 0.7-2.5 2.1v0.1c-0.4 1.4-0.7 2.7-0.6 2.8 0.1 0.1 0.1 0.1 0.1 0.2 0.6 1.2 0.2 2.6-1 3.2 -1.2 0.6-2.7 0.2-3.3-1s-0.2-2.6 1-3.2c0.1 0 0.1-0.1 0.2-0.1 0.1 0 0.3-0.6 0.6-1.4 0.2-0.7 0.3-1 0.4-1.3 0.1-0.4 0.3-1.4 0.2-1.8 -0.1-0.5-0.6-0.5-1.2-0.2 -0.3 0.2-0.9 0.7-1.1 0.9 -0.5 0.4-0.9 1-1.1 1.5 -0.1 0.2-0.3 0.5-0.5 0.7 -0.9 0.7-2.3 0.6-3-0.3 -0.7-0.9-0.6-2.2 0.3-3 0.3-0.2 0.6-0.4 0.9-0.4 0.5-0.1 2.4-1.2 3.5-2 0.2-0.1 0.5-0.4 0.6-0.5 0.3-0.4 0-0.7-0.3-0.7 -0.9 0.1-1.9 0.2-2.1 0.5 -0.1 0.1-0.2 0.3-0.4 0.4 -0.9 0.6-2.1 0.4-2.7-0.4 -0.6-0.8-0.4-2 0.4-2.6 0.4-0.3 0.8-0.4 1.2-0.4 0.7 0 2.5 0.4 4 0.1l0.4-0.1c1.5-0.3 3.3-1.6 4-2.9 0 0 0.7-1.2 1.6-2.7 0.9-1.5 0.8-3.2-0.1-3.7l-1.7-1c-0.9-0.5-2.3-0.5-3.2 0L1.6 7C0.7 7.5 0 8.6 0 9.6v12.8c0 1 0.7 2.2 1.6 2.7l11.9 6.5c0.9 0.5 2.3 0.5 3.2 0l11.8-6.5c0.9-0.5 1.6-1.7 1.6-2.7V9.6c0-1-0.7-2.2-1.6-2.7C26.5 5.9 28.5 7 26.5 5.9z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:kyleines@gmail.com"><i className="fas fa-at"></i></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;