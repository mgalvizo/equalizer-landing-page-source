import '../css/styles.css';
import '../css/styles.less';
import '../scss/styles.scss';
import Lupe from '../images/lupe.svg';

function addImage() {
    const h1 = document.createElement('h1');
    h1.innerText = 'Hey';
    const img = document.createElement('img');
    img.src = Lupe;
    const body = document.querySelector('body');
    body.appendChild(img);
    body.appendChild(h1);
}

export default addImage;
