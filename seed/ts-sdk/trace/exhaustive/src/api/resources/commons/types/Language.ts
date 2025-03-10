/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Language = "JAVA" | "JAVASCRIPT" | "PYTHON";
export const Language = {
    Java: "JAVA",
    Javascript: "JAVASCRIPT",
    Python: "PYTHON",
    _visit: <R>(value: Language, visitor: Language.Visitor<R>) => {
        switch (value) {
            case Language.Java:
                return visitor.java();
            case Language.Javascript:
                return visitor.javascript();
            case Language.Python:
                return visitor.python();
            default:
                return visitor._other();
        }
    },
} as const;

export namespace Language {
    export interface Visitor<R> {
        java: () => R;
        javascript: () => R;
        python: () => R;
        _other: () => R;
    }
}
