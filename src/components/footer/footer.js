import './footer.scss';

export function footer() {
    return `
        <footer class="footer">
            <nav class="footer__nav">
                <a class="footer__nav-item" href="#">Помощь</a>
                <a class="footer__nav-item" href="#">Обратная связь</a>
                <a class="footer__nav-item" href="#">Разработчикам</a>
                <a class="footer__nav-item" href="#">Условаия использования</a>
            </nav>
            <div class="footer__info">
                <span class="footer__info-item">
                    (c) 2001-2017 ООО "Яндекс"
                </span>
            </div>
        </footer>
    `
}