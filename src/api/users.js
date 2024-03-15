const ENDPOINT = 'https://jsonplaceholder.typicode.com';

/**
 *
 * @param {number|string} id
 * @return {Promise<Object>}
 */
export function getUser(id) {
    const url = new URL(`/users/${id}`, ENDPOINT);

    return fetch(url)
        .then((response) => response.json());
}
