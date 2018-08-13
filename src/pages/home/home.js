import './home.scss';

import { primaryInfo, scenarios } from './components';

export function home() {
    return `
        <div class="page">
            <section class="half-size">
                ${primaryInfo()}
            </section>
            <section class="half-size">
                ${scenarios()}
            </section>
        </div>
    `;
}
