import './header.scss';
import logo from './assets/logo.svg';

export function header() {
    return `
        <header class="header">
            <div class="header__logo">
                <img width="108" height="27" src="${logo}" alt="Яндекс Дом">
            </div>
            <nav class="header__nav menu">
                <a class="menu__item" href="#">Сводка</a>
                <a class="menu__item" href="#">Устройства</a>
                <a class="menu__item" href="#">Сценарии</a>
            </nav>
        </header>
    `
}