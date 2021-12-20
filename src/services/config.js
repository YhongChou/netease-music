const devBaseURL = "http://123.207.32.32:9001";
const prdBaseURL = "https://production.org";

export const BASE_URL = process.env.NODE_ENV === 'development'
    ? devBaseURL
    : prdBaseURL;

export const TIMEOUT = 5000;