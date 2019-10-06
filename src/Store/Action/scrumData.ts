import { createSomeData } from "../../Data/dndData"

export const setScrumData = (data: any) => {
    return {
        type: 'SET_SCRUM_DATA',
        payload: data
    }
}

export const getScrumData = (dataStatus: string): any => async dispatch => {
    const pseudoFetchData = await new Promise(function(resolve, _) {
        const data = createSomeData(21, 3);
        resolve(data);
    });

    dispatch(setScrumData(pseudoFetchData))
}