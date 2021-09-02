import { TOKEN_VALIDATED, USER_FETCHED_ANONIMO, USER_FETCHED, USER_FETCHED_ADMIN } from './actionsTypes';

export function login(values) {
    return submit(values)
}


function submit(values) {
    return {
        type: USER_FETCHED,
        payload: values
    }
}

export function loginAnonimo() {
    return {
        type: USER_FETCHED_ANONIMO,
        payload: true
    }
}

export function loginAdmin() {
    return {
        type: USER_FETCHED_ADMIN,
        payload: true
    }
}

export function logout() {
    return {
        type: TOKEN_VALIDATED,
        payload: false
    }
}

export function validateToken() {
    return {
        type: TOKEN_VALIDATED,
        payload: false
    };
}