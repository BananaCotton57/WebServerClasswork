export const API_ROOT = import.meta.env.VITE_API_ROOT as string ?? '/api/v1/'
//this is the root url of the api. It is used to fetch data from the server.
//it is set in the .env file and is used to fetch data from the server.
//it is set to the value of VITE_API_ROOT in the .env file. This is a special variable that is replaced by vite at build time.
//The tenary statement is used to check if the variable is defined. If it is not defined, it will use the default value of '/api/v1/'. Used as a fallback.

export function rest<T>(url: string): Promise<any> {
	return fetch(url).then(x => x.json());
}
//this function is used to fetch data from the server. It is called rest because it is a REST API.
//REST APIs are a type of web service that allows you to interact with a server using standard HTTP methods like GET, POST, PUT, DELETE, etc.
//the return statement is a promise that resolves to the json data.
//In english it means, "fetch the url, then convert the response to json and return it as a promise"

export function api<T>(action: string): Promise<T> {
    return rest<T>(`${API_ROOT}${action}`);
}

//this function is used to fetch data from the server. It is called api because it is a REST API.
//the return statement is a promise that resolves to the json data. (It is really ambiguous since most of my controllers in the server are REST APIs)