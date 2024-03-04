export class SessionExpiredError extends Error {
    constructor(message: string) {
        super(message);

        // Set the prototype for instance of
        Object.setPrototypeOf(this, SessionExpiredError.prototype);
    }
}
