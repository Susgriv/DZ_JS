Vue.component('header', {
        template: `
    <header class="header">
        <div class="container header__wrp">
            <div class="header__container">
                <img class="header__container-logo" src="img/icons/logo-img.png"
                     alt="logo">
                <filter-el></filter-el>
            </div>
            <ul class="header__menu-list">
                <li class="header__menu-title">
                    <button class="header__burger" id="burger">
                        <svg class="header__icon" width="32" height="23"
                             viewBox="0 0 32 23"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z"/>
                        </svg>
                    </button>
                    <nav class="header__nav" id="menu">
                        <button class="header__nav-close-button close"
                                type="button" id="burger-close">
                            <svg width="13" height="13" viewBox="0 0 13 13"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.4158 6.00409L11.7158 1.71409C11.9041 1.52579 12.0099 1.27039 12.0099 1.00409C12.0099 0.73779 11.9041 0.482395 11.7158 0.294092C11.5275 0.105788 11.2721 0 11.0058 0C10.7395 0 10.4841 0.105788 10.2958 0.294092L6.0058 4.59409L1.7158 0.294092C1.52749 0.105788 1.2721 -1.9841e-09 1.0058 0C0.739497 1.9841e-09 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.0017066 0.73779 0.0017066 1.00409C0.0017066 1.27039 0.107495 1.52579 0.295798 1.71409L4.5958 6.00409L0.295798 10.2941C0.20207 10.3871 0.127676 10.4977 0.0769072 10.6195C0.0261385 10.7414 0 10.8721 0 11.0041C0 11.1361 0.0261385 11.2668 0.0769072 11.3887C0.127676 11.5105 0.20207 11.6211 0.295798 11.7141C0.388761 11.8078 0.499362 11.8822 0.621222 11.933C0.743081 11.9838 0.873786 12.0099 1.0058 12.0099C1.13781 12.0099 1.26852 11.9838 1.39038 11.933C1.51223 11.8822 1.62284 11.8078 1.7158 11.7141L6.0058 7.41409L10.2958 11.7141C10.3888 11.8078 10.4994 11.8822 10.6212 11.933C10.7431 11.9838 10.8738 12.0099 11.0058 12.0099C11.1378 12.0099 11.2685 11.9838 11.3904 11.933C11.5122 11.8822 11.6228 11.8078 11.7158 11.7141C11.8095 11.6211 11.8839 11.5105 11.9347 11.3887C11.9855 11.2668 12.0116 11.1361 12.0116 11.0041C12.0116 10.8721 11.9855 10.7414 11.9347 10.6195C11.8839 10.4977 11.8095 10.3871 11.7158 10.2941L7.4158 6.00409Z"
                                    fill="#6F6E6E"/>
                            </svg>
                        </button>
                        <h2 class="header__nav-title">menu</h2>
                        <ul class="header__nav-list">
                            <li class="header__nav-item nav-item">
                                <h3 class="nav-item-title">man</h3>
                                <ul class="nav-item-list">
                                    <li class="nav-item__item"><a
                                        class="nav-item__item_link" href="#">Accessories</a>
                                    </li>
                                    <li class="nav-item__item"><a
                                        class="nav-item__item_link" href="#">Bags</a>
                                    </li>
                                    <li class="nav-item__item"><a
                                        class="nav-item__item_link" href="#">Denim</a>
                                    </li>
                                    <li class="nav-item__item"><a
                                        class="nav-item__item_link" href="#">T-Shirts</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="header__nav-item nav-item">
                                <h3 class="nav-item-title">woman</h3>
                                <ul class="nav-item-list">
                                    <li class="nav-item__item"><a
                                        class="nav-item__item_link" href="#">Accessories</a>
                                    </li>
                                    <li class="nav-item__item"><a
                                        class="nav-item__item_link" href="#">Jackets
                                        & Coast</a></li>
                                    <li class="nav-item__item"><a
                                        class="nav-item__item_link" href="#">Polos</a>
                                    </li>
                                    <li class="nav-item__item"><a
                                        class="nav-item__item_link" href="#">T-Shirts</a>
                                    </li>
                                    <li class="nav-item__item"><a
                                        class="nav-item__item_link" href="#">Shirts</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="header__nav-item nav-item">
                                <h3 class="nav-item-title">kids</h3>
                                <ul class="nav-item-list">
                                    <li class="nav-item__item"><a
                                        class="nav-item__item_link" href="#">Accessories</a>
                                    </li>
                                    <li class="nav-item__item"><a
                                        class="nav-item__item_link" href="#">Jackets
                                        & Coast</a></li>
                                    <li class="nav-item__item"><a
                                        class="nav-item__item_link" href="#">Polos</a>
                                    </li>
                                    <li class="nav-item__item"><a
                                        class="nav-item__item_link" href="#">T-Shirts</a>
                                    </li>
                                    <li class="nav-item__item"><a
                                        class="nav-item__item_link" href="#">Shirts</a>
                                    </li>
                                    <li class="nav-item__item"><a
                                        class="nav-item__item_link" href="#">Bags</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="">
                                <h3 class="">???????????? ???? ????????????????</h3>
                                <ul class="">
                                    <li class=""><a class="" href="index.html">??????????????</a>
                                    </li>
                                    <li class=""><a class="" href="card.html">??????????????</a>
                                    </li>
                                    <li class=""><a class=""
                                                    href="catalog.html">??????????????</a>
                                    </li>
                                    <li class=""><a class=""
                                                    href="product.html">????????????????</a>
                                    </li>
                                    <li class=""><a class=""
                                                    href="registration.html">??????????????????????</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </li>
                <li class="header__menu-title">
                    <a class="header__link" href="registration.html">
                        <svg class="header__icon" width="29" height="29"
                             viewBox="0 0 29 29"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.5 19.937C19 19.937 22.656 15.464 22.656 9.968C22.656 4.472 19 0 14.5 0C13.3631 0.0217413 12.2463 0.303398 11.2351 0.823397C10.2239 1.34339 9.34507 2.08794 8.66602 3C7.12663 4.99573 6.30819 7.45381 6.34399 9.974C6.34399 15.465 10 19.937 14.5 19.937ZM14.5 1.813C18 1.813 20.844 5.472 20.844 9.969C20.844 14.466 17.998 18.125 14.5 18.125C11.002 18.125 8.15603 14.465 8.15503 9.969C8.15403 5.473 11 1.813 14.5 1.813ZM20.844 18.125C20.6036 18.125 20.373 18.2205 20.203 18.3905C20.033 18.5605 19.9375 18.7911 19.9375 19.0315C19.9375 19.2719 20.033 19.5025 20.203 19.6725C20.373 19.8425 20.6036 19.938 20.844 19.938C22.526 19.9399 24.1386 20.6088 25.3279 21.7982C26.5172 22.9875 27.1861 24.6 27.188 26.282C27.1875 26.5221 27.0918 26.7523 26.922 26.9221C26.7522 27.0918 26.5221 27.1875 26.282 27.188H2.71997C2.47985 27.1875 2.24975 27.0918 2.07996 26.9221C1.91016 26.7523 1.81449 26.5221 1.81396 26.282C1.81608 24.6001 2.48517 22.9877 3.67444 21.7985C4.86371 20.6092 6.47608 19.9401 8.15796 19.938C8.39824 19.938 8.62868 19.8425 8.79858 19.6726C8.96849 19.5027 9.06396 19.2723 9.06396 19.032C9.06396 18.7917 8.96849 18.5613 8.79858 18.3914C8.62868 18.2215 8.39824 18.126 8.15796 18.126C5.99541 18.1279 3.92201 18.9875 2.39258 20.5164C0.863144 22.0453 0.00264777 24.1185 0 26.281C0.000794067 27.0019 0.287502 27.693 0.797241 28.2027C1.30698 28.7125 1.99811 28.9992 2.71899 29H26.282C27.0027 28.9989 27.6936 28.7121 28.2031 28.2024C28.7126 27.6927 28.9992 27.0017 29 26.281C28.9974 24.1187 28.1372 22.0457 26.6083 20.5168C25.0793 18.9878 23.0063 18.1276 20.844 18.125Z"/>
                        </svg>
                    </a>
                </li>
                <cart ref="cart"></cart>
            </ul>
        </div>
    </header>
`
    }
)