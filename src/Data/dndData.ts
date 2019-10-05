import { InitialData, Tasks, Task, Columns, Column, ColumnOrder } from "./types"


export const initialData: InitialData = {
    tasks: {
        'task-1': {
            id: 'task-1',
            content: 'Some task 1'
        },
        'task-2': {
            id: 'task-2',
            content: 'Some task 2'
        },
        'task-3': {
            id: 'task-3',
            content: 'Some task 3'
        },
        'task-4': {
            id: 'task-4',
            content: 'Some task 4'
        },
        'task-5': {
            id: 'task-5',
            content: 'Some task 5'
        },
        'task-6': {
            id: 'task-6',
            content: 'Some task 6'
        }
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'to-do',
            tasksIds: ['task-1', 'task-2', 'task-3']
        },
        'column-2': {
            id: 'column-2',
            title: 'done',
            tasksIds: ['task-4', 'task-5']
        },
        'column-3': {
            id: 'column-3',
            title: 'process',
            tasksIds: ['task-6']
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
}

export const createSomeData = (numBerOfTasks: number, numberOfColumns: number): InitialData => {
    const iterableArrForTasks: Array<void> = new Array(numBerOfTasks).fill(4);

    const generatedTasks: Tasks = iterableArrForTasks.reduce((acc: Tasks, item: void, index: number): Tasks => {
        const taskId: string = `Task-${index}`;
        const taskContent: string = `Some task ${index}`

        const newTask: Task = {
            id: taskId,
            content: taskContent
        };

        return {...acc, [taskId]: newTask}
    }, {});

    const tasksIds: Array<string> = Object.keys(generatedTasks);

    const iterableColumns: Array<void> = new Array(numberOfColumns).fill(4);
    const generatedColumns: Columns = iterableColumns.reduce((acc: Columns, item: void, index: number): Columns => {
        const columnId: string = `column-${index}`;
        const columnTitle: string = `column ${index} title`;

        if (index === 0) {
            const newColumn: Column = {
                id: columnId,
                title: columnTitle,
                tasksIds: tasksIds
            };

            return {...acc, [columnId]: newColumn}
        }

        const newColumn: Column = {
            id: columnId,
            title: columnTitle,
            tasksIds: []
        };

        return {...acc, [columnId]: newColumn}

    }, {});

    const columnOrder: ColumnOrder = Object.keys(generatedColumns);

    const initialData: InitialData = {
        tasks: generatedTasks,
        columns: generatedColumns,
        columnOrder: columnOrder
    };

    return initialData
}