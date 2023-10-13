export const usersReducer = (state = [], action) => {
    switch (action.type) {
        case 'addUser':
            return[
                ...state,
                {
                    ...action.payload,
                    id: new Date().getTime()
                }
            ];

        case 'eliminarUsuario':
            return state.filter( user => user.id !== action.payload );
    
        default:
            return state;
    }
}