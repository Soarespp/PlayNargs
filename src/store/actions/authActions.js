import { dispatch } from 'react-redux';
import { TOKEN_VALIDATED, USER_FETCHED_ANONIMO, USER_FETCHED } from './actionsTypes';

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