import AuthActions from "./../actions/authActions";
export default class AuthMiddleware {

    static singup(credentials) {
        return (dispatch) => {
            dispatch(AuthActions.singup())
        }
    }
}