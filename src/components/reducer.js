export const initialState = {
    user: {}
}

function reducer(state, action) {
    // console.log(action.user)
    switch(action.type) {
        case 'LOGED_IN':
            return {
                ...state,
                user: true
            }
        case 'LOGED_OUT':
            return {
                ...state,
                user: false
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default reducer