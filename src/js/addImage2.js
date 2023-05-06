import '../css/styles.css';
import '../css/styles.less';
import '../scss/styles.scss';
import Warning from '../images/warning.png';

function addImage2() {
    const img = document.createElement('img');
    img.src = Warning;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage2;
