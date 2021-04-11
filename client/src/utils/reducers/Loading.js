const Loading = (loading = false, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: !loading,
      };
    default:
      return loading;
  }
};

export default Loading;
