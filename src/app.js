import './app.scss';

import { header, footer } from './components';
import { home } from './pages';

export function app() {
    return `
        <div class="page">
            ${header()}
            <main class="main">
                ${home()}
            </main>
            ${footer()}
        </div>
    `;
}
