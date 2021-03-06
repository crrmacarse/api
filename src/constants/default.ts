/**
 * App Default Configurations
 */
export const DEFAULT_APP_NAME = 'crrmacarse@api';
export const DEFAULT_APP_URL = 'http://128.199.120.140';
export const DEFAULT_APP_PORT = 1111;

/**
 * A Request time out error will be thrown
 * after exceedin the stated value
 */
export const REQUEST_TIME_OUT = 10000;

/**
 * Rate limit configuration
 */
export const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
export const RATE_LIMIT_MAX = 100;

/**
 * Expiration time of Jwt Token
 */
export const JWT_TOKEN_EXPIRATION = '15min';
export const JWT_REFRESH_TOKEN_EXPIRATION = 7 * 24 * 3600 * 1000; // 7d @TODO

export const DEFAULT_ACCOUNT_ID = 1;

/**
 * Bycrypt salt
 */
export const BCRYPT_SALT = 10;