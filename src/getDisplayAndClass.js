const getDisplayAndClass = state => {
  const { mode, count } = state;
  if (mode === "printing") {
    return ["Printing...", "overlay-printing"];
  }

  if (mode === "countdown") {
    const className = `count-${count}`;
    let display = `${count}`;
    if (count === 4) {
      display = "Ready?";
    }
    if (count === 0) {
      display = "";
    }

    return [display, className];
  }

  return [];
};

export default getDisplayAndClass;
