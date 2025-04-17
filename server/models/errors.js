class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

const statusCodes = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,

    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    NOT_MODIFIED: 304,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308,


    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,

    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
};

module.exports = {
    CustomError,
    statusCodes
};
//these exports are are exported using not ES6 module.exports but using CommonJS module.exports (vue uses ES6 module.exports)

//pnpm i dotenv lets you use .env files (but it could lead to security issues if you don't use it properly)
//environment variables are variables that are set outside of your code and can be used to configure your application.
//they are often used to store sensitive information such as API keys, database connection strings, etc.
//they are set in the environment where your application is running.

//.env files are used to store environment variables.
//to install supabase you can use the documentation and find javascript