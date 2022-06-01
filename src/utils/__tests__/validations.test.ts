import { validateEmail } from "../validations";

describe("Email validation", () => {
  it("Returns false if email is lacking @", () => {
    expect(validateEmail("testemail.com")).toBeFalsy();
  });
  it("Returns false if email is lacking a TLD", () => {
    expect(validateEmail("testemail@gmail")).toBeFalsy();
  });
  it("Returns false if email is lacking a domain", () => {
    expect(validateEmail("testemail@.com")).toBeFalsy();
  });
  it("Returns false if email is lacking a dot between the domain and TLD", () => {
    expect(validateEmail("testemail@gmailcom")).toBeFalsy();
  });
  it("Returns true if email is valid", () => {
    expect(validateEmail("test@gmail.com")).toBeTruthy();
    expect(validateEmail("abaef@abc.de")).toBeTruthy();
  });
});
