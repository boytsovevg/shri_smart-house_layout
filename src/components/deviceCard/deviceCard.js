import './deviceCard.scss';

export function deviceCard({ icon, description, status, styles }) {

    return `
        <div class="device-card" style="${styles}">
            <div class="device-card__icon"></div>
            <div class="device-card__description">
                ${description}
            </div>
            <p class="device-card__status ${!status ? "device-card__status_hidden " : ""}">
                ${status}
            </p>
        </div>
    `;
}