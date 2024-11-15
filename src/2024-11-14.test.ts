import { generateChatRoomNames } from './2024-11-14';

describe('Generate Chat Room Names', () => {
  it('Should return an empty array if no users exist', () => {
    const names: [] = [];
    const expectedResult: [] = [];
    expect(generateChatRoomNames(names)).toEqual(expectedResult);
  });

  it("Should return a user's forename if only one user exists", () => {
    const names = ['Joe Bloggs'];
    const expectedResult = ['Joe'];
    expect(generateChatRoomNames(names)).toEqual(expectedResult);
  });

  it('Should return names in Title Case', () => {
    const names = ['JOE Bloggs'];
    const expectedResult = ['Joe'];
    expect(generateChatRoomNames(names)).toEqual(expectedResult);
  });

  it("Should return user's forenames if they are all unique", () => {
    const names = ['Joe Bloggs', 'John Smith'];
    const expectedResult = ['Joe', 'John'];
    expect(generateChatRoomNames(names)).toEqual(expectedResult);
  });

  it("Should return user's forenames if they are all unique in alphabetical order", () => {
    const names = ['Joe Bloggs', 'John Smith', 'Jane Doe'];
    const expectedResult = ['Jane', 'Joe', 'John'];
    expect(generateChatRoomNames(names)).toEqual(expectedResult);
  });

  it("Should return user's initials if their is a forename collision", () => {
    const names = ['Joe Bloggs', 'John Smith', 'Jane Doe', 'Jane Bloggs'];
    const expectedResult = ['Jane B', 'Jane D', 'Joe', 'John'];
    expect(generateChatRoomNames(names)).toEqual(expectedResult);
  });

  it("Should return user's full names if there is a first and initials collision", () => {
    const names = ['Joe Bloggs', 'John Smith', 'Jane Doe', 'Jane Bloggs', 'John Scott'];
    const expectedResult = ['Jane B', 'Jane D', 'Joe', 'John Scott', 'John Smith'];
    expect(generateChatRoomNames(names)).toEqual(expectedResult);
  });
});
