import './home.scss';

import { header } from '../../components';

function home() {
    return `
        ${header()}
    `;
}

export default document.body.innerHTML = home();
