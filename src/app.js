import './app.scss';

import { header } from './components';
import { home } from './pages';

function app() {
    return `
        <div class="app">
            ${header()}
            <main class="main">
                ${home()}
            </main>
            <footer class="footer">Footer</footer>
        </div>
    `;
}

export default document.body.innerHTML = app();