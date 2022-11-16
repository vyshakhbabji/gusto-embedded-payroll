export function isCodeInRange(code: number): boolean {
    return code >= 200 && code < 300;
}

export function urlBuilder(path: string, params: any, query: any) {
  let url = path;

  if (params) {
    url = url.replace(/\{([^}]+)\}/g, function(match, key) {
      return params[key];
    });
  }
  if (query) {
    url += "?";
    url += Object.keys(query)
      .map(key => `${key}=${query[key]}`)
      .join("&");
  }
  return url;
}