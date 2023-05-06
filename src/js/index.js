import addImage from './addImage';
import addImage2 from './addImage2';

const onAppRender = () => {
    console.log('App rendered');
};

export const renderApp = () => {
    onAppRender();
};

window.addEventListener('load', onAppRender);

addImage();
addImage2();

console.log('Hello World');
