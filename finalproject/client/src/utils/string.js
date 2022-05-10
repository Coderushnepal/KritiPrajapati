import pinterpolate from "pinterpolate";

export const interpolate = function (url, params) {
  return pinterpolate(url, params);
};

export const unParseQuery = (object) => {
  return Object.keys(object)
    .reduce((acc, curr) => {
      if (Array.isArray(object[curr])) {
        return `${acc}${curr}[]=${object[curr].join(`&${curr}[]=`)}&`;
      }

      return curr && object[curr]
        ? `${acc}${curr}=${encodeURIComponent(object[curr])}&`
        : acc;
    }, "?")
    .slice(0, -1);
};