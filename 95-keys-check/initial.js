const CDKey = (key) => {
  return !(key
    .split("-")
    .map((value, index) => {
      return !index ?
        value[0] == value[1] && value[0] == value[2] && value[0] >= 3 :
        value.split("").reduce((t, n) => t + n) % 7 == 0 &&
        (value.slice(-1) == 0 || value.slice(-1) >= 8)
    })
    .indexOf(!1))
};

const OEMKey = (key) => {
  return !(key
    .split("-")
    .map((value, index) =>
      index < 2 ?
        index ?
          (value.slice(0, 3) < 367 && value.slice(3) > 94) ||
          value.slice(3) < 3 :
          value == "OEM" :
        index - 2 ?
          value.split("").reduce((t, n) => t + n) % 7 == 0 &&
          (value.slice(-1) == 0 || value.slice(-1) >= 8) :
          value.length == 5
    )
    .indexOf(!1))
};

console.log(CDKey('666-3307956'));
