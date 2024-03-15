const ENDPOINT = 'https://jsonplaceholder.typicode.com';


/**
 *
 * @return {Promise<any[]>}
 */
export function getPosts() {
    const url = new URL('/posts', ENDPOINT);

    return fetch(url)
        .then((response) => response.json());
}

/**
 *
 * @param {number|string} postId
 * @return {Promise<any[]>}
 */
export function getPostComments(postId) {
    const url = new URL(`/posts/${postId}/comments`, ENDPOINT);

    return fetch(url)
        .then((response) => response.json());
}
