const init = {
  cars: ["BMW"],
};

export default function reducer(state = init, action, args) {
  switch (action) {
    case "ADD_CAR":
      const [car] = args;
      return {
        ...state,
        cars: [...state.cars, car],
      };
    default:
      return state;
  }
}
