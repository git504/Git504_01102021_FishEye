const getUrlTag = () => {
  const params = new URLSearchParams(window.location.search);
  let getTagOnUserPage = params.get("tag");
  return getTagOnUserPage;
};

export { getUrlTag };
