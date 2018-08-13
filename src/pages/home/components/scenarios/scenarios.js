import styles from './scenarios.scss';

import { deviceList } from '../../../../components';

export function scenarios() {
    const devices = [
        {
            description: 'Выключить весь свет в доме и во дворе'
        },
        {
            description: 'Я ухожу'
        },
        {
            description: 'Выключить свет в коридоре'
        },
        {
            description: 'Набрать горячую ванну',
            status: 'Начнется в 18:00'
        },
        {
            description: 'сделать пол теплым во всей квартире'
        }
    ];

    const deviceNodes = deviceList(devices, { devices: 'scenarios__devices', device: 'scenarios__device'});

    return `
        <div class="scenarios">
            <h1>Избранные сценарии</h1>
            ${deviceNodes}
        </div>
    `;
}
