import './favoriteDevices.scss';

import { categories } from '../categories/categories';

export function favoriteDevices() {

    const categoriyLabels = [
        'Все',
        'Кухня',
        'Зал',
        'Лампочки',
        'Камеры'
    ];

    return `
        <div class="favorite">
            <div class="">
                <h1>Избранные устройства</h1>
                ${categories(categoriyLabels)}
            </div>
            <div class="favorite__devices">

            </div>
        </div>
    `
}