import React from "react";

export function Header() {
    return (
        <>
            <header id="header" className="site-header text-black" style={{backgroundColor:"#faebd7"}}>
                <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
                    <div className="container-lg">
                        <a className="navbar-brand" href="index.html">
                            <img
                                src="https://inkythuatso.com/uploads/thumbnails/800/2022/06/hinh-nen-nike-4k-full-hd-cho-dien-thoai-1-inkythuatso-09-09-55-02.jpg"
                                width ="150px"
                                height="100px"
                                style={{marginRight:"50px"}}
                            />
                        </a>
                        <button
                            className="navbar-toggler d-flex d-lg-none order-3 p-2"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#bdNavbar"
                            aria-controls="bdNavbar"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <svg className="navbar-icon">
                                <use xlinkHref="#navbar-icon" />
                            </svg>
                        </button>
                            <div className="offcanvas-body">
                                <ul
                                    id="navbar"
                                    className="navbar-nav text-hover justify-content-end align-items-center flex-grow-1 pe-3"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link me-5 active border-0"
                                            href="#"
                                            aria-expanded=""
                                            style={{ fontSize: 20 }}
                                        >
                                            Trang Chủ
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link me-5" style={{ fontSize: 20 }} href="#">
                                            Giày Nam
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link me-5" style={{ fontSize: 20 }} href="#">
                                            Giày Nữ
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link me-5"
                                            style={{ fontSize: 20 }}
                                            href="shop.html"
                                        >
                                            Shop
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link me-5" style={{ fontSize: 20 }} href="#">
                                            Khuyến Mãi
                                        </a>
                                    </li>
                                    <a
                                        href="login"
                                        className="border-0 btn btn-secondary"
                                    >
                                        Đăng Nhập
                                    </a>
                                    <li className="nav-item">
                                        <div className="user-items ps-5">
                                            <ul className="d-flex justify-content-end list-unstyled">
                                                <li className="pe-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                         fill="currentColor" className="bi bi-person-circle"
                                                         viewBox="0 0 16 16">
                                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                                        <path fill-rule="evenodd"
                                                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                                    </svg>
                                                </li>
                                                <li>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                             fill="currentColor" className="bi bi-cart4"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                                        </svg>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </nav>
            </header>

        </>
    );
}