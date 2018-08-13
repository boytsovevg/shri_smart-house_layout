import './home.scss';

import { favoriteDevices, primaryInfo, scenarios } from './components';

export function home() {
    return `
        <div class="item">
            <section class="half-size">
                ${primaryInfo()}
            </section>
            <section class="half-size">
                ${scenarios()}
            </section>
        </div>
        <section class="item">
            ${favoriteDevices()}
        </section>
    `;
}
