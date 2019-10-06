const initialState = {
    dataStatus: '',
    tasks: {},
    columns: {},
    columnOrder: []
};

export const scrumDataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_SCRUM_DATA': {
            return { ...state, ...action.payload }
        }
        default: {
            return state
        }
    }
}