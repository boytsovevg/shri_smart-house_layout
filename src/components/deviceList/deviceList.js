import './deviceList.scss';

import { getListItems } from '../../services/list.service';
import { deviceCard } from '../deviceCard/deviceCard';

export function deviceList(devices, classes = {}) {

    const devicesList = getListItems(devices, deviceCard, classes.device);

    return `
        <ul class="${classes.devices}">
            ${devicesList}
        </ul>
    `
}