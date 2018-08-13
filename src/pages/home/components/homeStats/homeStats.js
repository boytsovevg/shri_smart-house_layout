import './homeStats.scss';

import { deviceList } from '../../../../components';

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

    return `
        <div class="stats">
            <div>
                <h1>Привет, Геннадий!</h1>
                <p>Двери и окна закрыты, сигнализация включена.</p>
                <div class="stats__weather-info">
                    ${weatherInfo()}
                </div>
            </div>
            ${deviceList(devices, {devices: 'stats__devices', device: 'stats__device'})}
            </ul>
        </div>
    `;
}