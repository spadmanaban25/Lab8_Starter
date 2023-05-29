// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test("Checking Phone Number 123-456-7890 Validity", () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

test("Checking Phone Number 789-258-9510 Validity", () => {
    expect(functions.isPhoneNumber("789-258-9510")).toBe(true);
});

test("Checking Phone Number 1234567890 Validity", () => {
    expect(functions.isPhoneNumber("1234567890")).toBe(false);
});

test("Checking Phone Number 753-159-06 Validity", () => {
    expect(functions.isPhoneNumber("753-159-06")).toBe(false);
});

test("Checking Email hmcmahon@gmail.com Validity", () => {
    expect(functions.isEmail("hmcmahon@gmail.com")).toBe(true);
});

test("Checking Email devjohn@apple.com Validity", () => {
    expect(functions.isEmail("devjohn@apple.com")).toBe(true);
});

test("Checking Email devjohn@apple.commmm Validity", () => {
    expect(functions.isEmail("devjohn@apple.commmm")).toBe(false);
});

test("Checking Email invalidemail Validity", () => {
    expect(functions.isEmail("invalidemail")).toBe(false);
});

test("Checking Password cs4life Strength", () => {
    expect(functions.isStrongPassword("cs4life")).toBe(true);
});

test("Checking Password hello_world Strength", () => {
    expect(functions.isStrongPassword("hello_world")).toBe(true);
});

test("Checking Password 5isgreat Strength", () => {
    expect(functions.isStrongPassword("5isgreat")).toBe(false);
});

test("Checking Password this_is_a_long_password Strength", () => {
    expect(functions.isStrongPassword("this_is_a_long_password")).toBe(false);
});

test("Checking Date 5/8/2023 Validity", () => {
    expect(functions.isDate("5/8/2023")).toBe(true);
});

test("Checking Date 10/20/2001 Validity", () => {
    expect(functions.isDate("10/20/2001")).toBe(true);
});

test("Checking Date 133/21/2019 Validity", () => {
    expect(functions.isDate("133/21/2019")).toBe(false);
});

test("Checking Date 07/11/20999 Validity", () => {
    expect(functions.isDate("07/11/20999")).toBe(false);
});

test("Checking Hex Color #4287f5 Validity", () => {
    expect(functions.isHexColor("#4287f5")).toBe(true);
});

test("Checking Hex Color f3a Validity", () => {
    expect(functions.isHexColor("f3a")).toBe(true);
});

test("Checking Hex Color #fffffffffff Validity", () => {
    expect(functions.isHexColor("#fffffffffff")).toBe(false);
});

test("Checking Hex Color #1 Validity", () => {
    expect(functions.isHexColor("#1")).toBe(false);
});