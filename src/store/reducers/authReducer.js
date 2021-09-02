import { TOKEN_VALIDATED, USER_FETCHED_ANONIMO, USER_FETCHED, USER_FETCHED_ADMIN } from '../actions/actionsTypes';
import ImgAnonimo from '../../arquivos/anonimo_erro.png';

const userKey = '_mymoney_user'
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false,
    loginAnonimo: false,
    profileObj: {}
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOKEN_VALIDATED:
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }
        case USER_FETCHED:
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return {
                ...state,
                loginAnonimo: false,
                user: {
                    name: action.payload.profileObj.name,
                    email: action.payload.profileObj.email,
                    img: action.payload.profileObj.imageUrl
                },
                validToken: true,
                profileObj: action.payload.profileObj
            }
        case USER_FETCHED_ANONIMO:
            return {
                ...state,
                loginAnonimo: true,
                user: {
                    name: "Anônimo",
                    email: "Anônimo",
                    img: ImgAnonimo
                },
                validToken: true
            }
        case USER_FETCHED_ADMIN:
            return {
                ...state,
                loginAnonimo: false,
                user: {
                    name: "Admin",
                    email: "Admin",
                    img: ImgAnonimo
                },
                validToken: true
            }

        default:
            return state
    }
}

export default authReducer;