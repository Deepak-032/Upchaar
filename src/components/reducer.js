export const initialState = {
    user: false
}

function reducer(state, action) {
    console.log(action)
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
        
        default:
            return state
    }
}

export default reducer