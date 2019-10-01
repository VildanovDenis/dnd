export type Task = {
    id: string;
    content: string;
};

export type Column = {
    id: string;
    title: string;
    tasksIds: string[];
    // tasksIds: Array<{key: string, value: number}>;
};