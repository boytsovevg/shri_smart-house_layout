import './homeStats.scss';

import { deviceCard } from '../../../../components';

import { weatherInfo } from '../wetherInfo/weatherInfo';

export function homeStats() {

    const devices = [
        {
            description: 'Philips Cooler',
            status: 'Начнет охлажлать в 16:30'
        },
        {
            description: 'Xiaomi Yeelight LED Smart Bulb',
            status: 'Включится в 17:00'
        },
        {
            description: 'Philips Cooler',
            status: 'начнет охлажлать в 16:30'
        }
    ];

    const devicesList = devices
        .map(device => `<li class="stats__device">${deviceCard(device)}</li>`)
        .join(',')
        .replace(/,/g, '');

    return `
        <div class="stats">
            <div>
                <h1>Привет, Геннадий!</h1>
                <p>Двери и окна закрыты, сигнализация включена.</p>
                <div class="stats__weather-info">
                    ${weatherInfo()}
                </div>
            </div>
            <ul class="stats__devices">
               ${devicesList}
            </ul>
        </div>
    `;
}