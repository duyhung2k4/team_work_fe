export const getPath = () => {
  const url = window.location.pathname;
  const cutUrl = url.split("/");

  return {
    url,
    listPath: cutUrl,
  }
}