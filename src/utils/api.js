import 'whatwg-fetch';

export function fetchVouchers() {
    return fetch('/data.json')
        .then(response => response.json());
}
