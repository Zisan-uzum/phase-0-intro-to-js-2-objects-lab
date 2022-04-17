const employee = {
  name: "John",
  streetAdress: "New York",
};
const updateEmployeeWithKeyAndValue = (object, key, value) => {
  const newObject = { ...object, [key]: value };
  return newObject;
};
const destructivelyUpdateEmployeeWithKeyAndValue = (object, key, value) => {
  object[key] = value;
  return object;
};
const deleteFromEmployeeByKey = (object, key) => {
  const newObject = { ...object };
  delete newObject[key];
  return newObject;
};
const destructivelyDeleteFromEmployeeByKey = (object, key) => {
  delete object[key];
  return object;
};
