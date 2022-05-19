import { validateEmail } from "../validations";

describe("Email validation", () => {
  it("Returns true if email is valid", () => {
    expect(validateEmail("test@gmail.com")).toBeTruthy();
    expect(validateEmail("abaef@abc.de")).toBeTruthy();
  });
  it("Returns false if email is invalid", () => {
    expect(validateEmail("testgmail.com")).toBeFalsy();
    expect(validateEmail("aba@ef@abc.de")).toBeFalsy();
    expect(validateEmail("abaef@abcde")).toBeFalsy();
    expect(validateEmail("abaef@.abcde")).toBeFalsy();
    expect(validateEmail("abaefabcde")).toBeFalsy();
  });
});
