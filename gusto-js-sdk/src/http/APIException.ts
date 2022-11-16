export class ApiException<T> extends Error {
    public constructor(public code: number, message: string, public body: T, public headers: { [key: string]: string; }) {
        super("HTTP-Code: " + code + "\nMessage: " + message + "\nBody: " + JSON.stringify(body) + "\nHeaders: " +
            JSON.stringify(headers))
    }
}