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

        case 'updateUser':
            return state.map( u => {
                if (u.id === action.payload.id) {
                    return {
                        ...action.payload,
                        clave: u.clave
                    };
                }
                return u;
            } )

        case 'eliminarUsuario':
            return state.filter( user => user.id !== action.payload );
    
        default:
            return state;
    }
}