import AuthActions from "./../actions/authActions";

const INITIAL_STATE = {
    authUser: {},
    isLoadding: false,
    isAuthenticated : false
}

function AuthReducer(state = INITIAL_STATE, action) {
    var obj1 = null;
    switch(action.type) {        
        case AuthActions.SIGNUP:
            return {...state, isAuthenticated:true};
            //obj1 = Object.assign({}, state);
            //return obj1;
            /*
            return {
                ...state,
                all: action.data
            }*/
        case AuthActions.SIGNUP_SUCCESSFULL:
            obj1 = Object.assign({}, state);
            return obj1;
        case AuthActions.SIGNUP_REJECTED:
            obj1 = Object.assign({}, state);
            return obj1;            
        case AuthActions.SIGNIN:
            obj1 = Object.assign({}, state);
            return obj1;
        case AuthActions.SIGNIN_SUCCESSFULL:
            obj1 = Object.assign({}, state);
            return obj1;
        case AuthActions.SIGNIN_REJECTED:
            obj1 = Object.assign({}, state);
            return obj1;
        default:
            return state;
    }
}

export default AuthReducer;