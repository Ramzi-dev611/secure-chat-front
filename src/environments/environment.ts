const http_prot = "http://";
const websocket_prot = "ws://";
export const DEBUG = true;
export const BASE_API_URL= "localhost:5000";
export const LOGIN_URL = `${http_prot}${BASE_API_URL}/login`;
export const MESSAGES_URL = `${websocket_prot}${BASE_API_URL}/login`;
export const TEST_SOCKET= "ws://localhost:5000/echo";

export const environment = {
    production: false,
}