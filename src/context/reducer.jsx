const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return {
                ...state,
                list: [
                    ...new Set(
                        [...state.list, ...action.payload].map(JSON.stringify)
                    ),
                ].map(JSON.parse), //Always Unique values
            };
        case "ADD_FAVOURITE_ITEM":
            return {
                ...state,
                list: [
                    ...new Set(
                        [
                            ...state.list.toSpliced(
                                state.list.findIndex(
                                    (el) => el.id === action.payload.id
                                ),
                                1,
                                action.payload
                            ),
                        ].map(JSON.stringify)
                    ),
                ].map(JSON.parse),
            };
        case "SET_OFFSET":
            return {
                ...state,
                offset: action.payload,
            };
        case "SET_IS_API_LOAD_REQ":
            return {
                ...state,
                isAPILoadReq: action.payload,
            };
        case "SET_SCROLL_POSITION":
            return {
                ...state,
                scrollYPosition: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
