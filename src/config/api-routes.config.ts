export const DOMAIN = "http://192.168.0.192:8182";
export const ADMIN = "admin";
export const USER = "api";
export const VERSION_V1 = "v1";

export const API_USER = `${DOMAIN}/${USER}/${VERSION_V1}`;
export const API_ADMIN = `${DOMAIN}/${USER}/${ADMIN}`;

// Define types for route path structure
interface RoutePath {
  BLOGS: {
    GET_ALL: string;
    GET_SINGLE: string;
  };
}

export const ROUTE_PATH: RoutePath = {
  BLOGS: {
    GET_ALL: `${API_ADMIN}/blogs/list`,
    GET_SINGLE: `${API_ADMIN}/blog`,
  },
};
