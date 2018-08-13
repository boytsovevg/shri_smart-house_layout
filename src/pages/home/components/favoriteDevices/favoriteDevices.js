import './favoriteDevices.scss';

import { categories } from '../categories/categories';
import { deviceList } from '../../../../components';

export function favoriteDevices() {

    const categoriyLabels = [
        'Все',
        'Кухня',
        'Зал',
        'Лампочки',
        'Камеры'
    ];

    const favoriteDevices = [
        {
            description: 'Xiaomi Yeelight LED Smart Bulb',
            status: 'Включено'
        },
        {
            description: 'D-link Omna 180 Cam',
            status: 'Включится в 17:00'
        },
        {
            description: 'Elgato Eve Degree Connected',
            status: 'Выключено до 17:00'
        },
        {
            description: 'LIFX Mini Day & Dusk A60 E27',
            status: 'Включится в 17:00'
        },
        {
            description: 'Xiaomi Mi Air Purifier 2S',
            status: 'Включено'
        },
        {
            description: 'Philips Zhirui',
            status: 'Выключено'
        },
        {
            description: 'Xiaomi Yeelight LED Smart Bulb',
            status: 'Включено'
        }
    ]

    

    return `
        <div class="favorite">
            
            <div class="favorite__categories">
                <h1>Избранные устройства</h1>
                ${categories(categoriyLabels)}
            </div>

            ${deviceList(favoriteDevices, { devices: 'favorite__devices', device: 'favorite__device' })}
        </div>
    `
}