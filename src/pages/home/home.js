import './home.scss';

function home(data) {
    return `
        <div class="home">My home #${data.number}</div>
    `;
}

export default document.body.innerHTML = home({ number: 21 });
