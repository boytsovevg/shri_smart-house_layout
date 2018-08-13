import './primaryInfo.scss';

import { homeStats } from '../homeStats/homeStats';

export function primaryInfo() {
    return `
        <div class="primary-info">
            <h1 class="primary-info__heading">Главное</h1>
            <div class="primary-info__stats">
                ${homeStats()}
            </div>
        </div>
    `;
}