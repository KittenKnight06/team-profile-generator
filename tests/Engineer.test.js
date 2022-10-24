const Engineer = require("../positions/Engineer");

test("Can create a github.", () => {
    const testGithub = "WenyanGe";
    const employeeInstance = new Engineer("Wenyan", 2, "katherinege06@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "WenyanGe";
    const employeeInstance = new Engineer("Wenyan", 2, "katherinege06@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Wenyan", 2, "katherinege06@gmail.com", "WenyanGe");
    expect(employeeInstance.getRole()).toBe(returnValue);
});