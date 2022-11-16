export const useHandleFilter = (param: string, value: any) => {
  const params = new URLSearchParams(window.location.search);
  // eslint-disable-next-line no-unused-expressions
  params.get(param) ? params.set(param, value) : params.append(param, value);
  const newPath = `new?${params.toString()}`;
  window.history.pushState({ path: newPath }, '', newPath);
};
