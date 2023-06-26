const useSetRequest = (setLoginRequest) => {
  // function to get user input and save it in our state
  const setRequest = (value, key) => {
    setLoginRequest((previously) => {
      return {
        ...previously,
        [key]: value,
      };
    });
  };

  return {
    setRequest
  }
};

export default useSetRequest