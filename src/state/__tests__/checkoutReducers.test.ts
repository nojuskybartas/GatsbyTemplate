import {
  checkoutSlice,
  initialState,
  setEmailIsValid,
  setEmailValue,
  setIsSignedUp,
} from "../checkout";

describe("Checkout State Reducers", () => {
  it("should return initial state", () => {
    expect(checkoutSlice.reducer(undefined, setIsSignedUp)).toEqual(
      initialState
    );
  });

  it("updates email signed up state correctly", () => {
    expect(checkoutSlice.reducer(initialState, setIsSignedUp(true))).toEqual({
      ...initialState,
      isSignedUp: true,
    });
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
