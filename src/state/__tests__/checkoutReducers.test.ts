import {
  checkoutSlice,
  initialState,
  setEmailIsValid,
  setEmailValue,
} from "../checkout";

describe("Checkout State Reducers", () => {
  it("should return initial state", () => {
    expect(checkoutSlice.reducer(undefined, setEmailValue)).toEqual(
      initialState
    );
  });

  it("updates email value state correctly", () => {
    const mockEmail = "test.email@gmail.com";
    expect(
      checkoutSlice.reducer(initialState, setEmailValue(mockEmail))
    ).toEqual({
      ...initialState,
      email: {
        ...initialState.email,
        value: mockEmail,
      },
    });
  });

  it("updates email validity state correctly", () => {
    const mockEmailIsValid = true;

    expect(
      checkoutSlice.reducer(initialState, setEmailIsValid(mockEmailIsValid))
    ).toEqual({
      ...initialState,
      email: {
        ...initialState.email,
        isValid: mockEmailIsValid,
      },
    });
  });
});
