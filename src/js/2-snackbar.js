import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
form.addEventListener('submit', popUpMessage);

function popUpMessage(evt) {
evt.preventDefault();
const delay = form.elements.delay.value;
const state = form.elements.state.value;
    const promise = createPromise({ delay, state });
    promise.then(onFulfilled).catch(onRejected);    
};

function createPromise({ delay, state }) {
const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);     
});
    return promise;
};

function onFulfilled(delay) {
iziToast.show({
    title: 'OK',
    message: `Fulfilled promise in ${delay}ms`
});
};
function onRejected(delay) {
iziToast.show({
    title: 'Error',
    message: `Rejected promise in ${delay}ms`
});
};