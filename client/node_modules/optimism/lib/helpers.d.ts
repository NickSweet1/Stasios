export declare const hasOwnProperty: (v: PropertyKey) => boolean;
export declare const arrayFromSet: <T>(set: Set<T>) => T[];
export type Unsubscribable = {
    unsubscribe?: void | (() => any);
};
export declare function maybeUnsubscribe(entryOrDep: Unsubscribable): void;
