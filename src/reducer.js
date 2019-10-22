const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      const isDone = state.pictures.length === 3;
      if (isDone) {
        return {
          ...state,
          mode: "printing",
          isFlash: false
        };
      }
      return {
        ...state,
        mode: "countdown",
        count: 4,
        isFlash: false
      };
    case "decrement":
      const newCount = state.count - 1;
      console.log({ newCount });
      if (newCount > 0) {
        return { ...state, mode: "countdown", count: newCount };
      } else {
        console.log("flash");
        return { ...state, mode: "flash", isFlash: true };
      }
    case "takePic":
      return { ...state, mode: "takePic" };
    case "storePic":
      return { ...state, pictures: [...state.pictures, action.data] };
    case "done":
      return { pictures: [] };
    default:
      console.log({ state, action });
      return { ...state };
  }
};

export default reducer;
