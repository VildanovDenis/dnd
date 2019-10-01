export const initialData = {
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
            tasksIds: ['task-4', 'task-5', 'task-6']
        },
        'column-3': {
            id: 'column-3',
            title: 'process',
            tasksIds: []
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
}