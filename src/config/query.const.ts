// query.config.ts

export const QUERY_KEYS = {
  GET_ALL_BLOGS: "get-all-blogs",
  GET_SINGLE_BLOG: "get-single-blog",
} as const;

export type QueryKey = typeof QUERY_KEYS[keyof typeof QUERY_KEYS];

export const QUERY_METHODS = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
  PATCH: "patch",
} as const;

export type QueryMethod = typeof QUERY_METHODS[keyof typeof QUERY_METHODS];
