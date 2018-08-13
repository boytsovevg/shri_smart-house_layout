import './scenarios.scss';

import { deviceCard } from '../../../../components';
import { getListItems } from '../../../../services/list.service';

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

    const devicesList = getListItems(devices, deviceCard);

    return `
        <div class="scenarios">
            <h1>Избранные сценарии</h1>
            <div class="scenarios__devices">
                ${devicesList}
            </div>
        </div>
    `;
}
