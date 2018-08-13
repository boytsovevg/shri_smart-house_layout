import './header.scss';
import logo from './assets/logo.svg';

export function header() {

    return `
        <header class="header">
            <div class="header__logo">
                <img width="108" height="27" src="${logo}" alt="Яндекс Дом">
            </div>
            <nav class="header__nav">
                <a class="header__nav-item" href="#">Сводка</a>
                <a class="header__nav-item" href="#">Устройства</a>
                <a class="header__nav-item" href="#">Сценарии</a>
            </nav>
        </header>
    `
}