import './homeStats.scss';

import { weatherInfo } from '../wetherInfo/weatherInfo';

export function homeStats() {

    return `
        <div class="some-stats">
            <h1>Привет, Геннадий!</h1>
            <p>Двери и окна закрыты, сигнализация включена.</p>
            <div>
                ${weatherInfo()}
            </div>
        </div>
    `;
}