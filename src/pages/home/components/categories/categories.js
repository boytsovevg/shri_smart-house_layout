import './categories.scss';

import { getListItems } from '../../../../services/list.service';
import { badge } from '../../../../components';

export function categories(categoryLabels) {
    const categoryList = getListItems(categoryLabels, badge, 'categories__category');

    return `
        <ul class="categories">
            ${categoryList}
        </ul>
    `
}