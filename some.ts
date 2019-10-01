const task: Task = {
    'taskId': {
        taskId: 'taskId',
        name: 'some-string'
    }
};

type TaskId = string;

type Task = {
    [taskId in TaskId]: {
        taskId: TaskId;
        name: string;
    }
}

class Some<Generic extends object> {
    constructor(a: Task, b: Generic, c: boolean) { }
}