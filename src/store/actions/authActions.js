export default class AuthActions {

    static SIGNUP = 'SIGNUP';
    static SIGNUP_SUCCESSFULL = 'SIGNUP_SUCCESSFULL';
    static SIGNUP_REJECTED = 'SIGNUP_REJECTED';

    static SIGNIN = 'SIGNIN';
    static SIGNIN_SUCCESSFULL = 'SIGNIN_SUCCESSFULL';
    static SIGNIN_REJECTED = 'SIGNIN_REJECTED';

    
    static singup() {
        return {
            type: AuthActions.SIGNUP
        }
    }

    static singupSuccessfull(authUser) {
        return {
            type: AuthActions.SIGNUP_SUCCESSFULL,
            payload: authUser
        }
    }

    static singupRejected() {
        return {
            type: AuthActions.SIGNUP_REJECTED
        }
    }


    static signin() {
        return {
            type: AuthActions.SIGNIN
        }
    }

    static signinSuccessfull(authUser) {
        return {
            type: AuthActions.SIGNIN_SUCCESSFULL,
            payload: authUser
        }
    }

    static signinRejected() {
        return {
            type: AuthActions.SIGNIN_REJECTED
        }
    }
}