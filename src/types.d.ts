export type Dictionary<Value, Key extends string> = {
    [Key]: Value | undefined;
};