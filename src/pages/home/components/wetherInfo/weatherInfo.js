import './weatherInfo.scss';

export function weatherInfo() {
    return `
        <div class="weather-info">
            <div class="weather-info__item">
                <h3>Дома</h3>
                <span>+ 23</span>
            </div>
            <div class="weather-info__item">
                <h3>На улице</h3>
                <span>+ 19</span>
            </div>
        </div>
    `;
}