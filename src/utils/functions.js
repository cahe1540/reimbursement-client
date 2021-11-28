export const userIsValid = (user) => {
  if (user && user.firstName && user.workerId) {
    if (user.workerId > 0) return true;
  }
  return false;
};

/**
 * Method that finds the element in data with the same id as
 * the input object and replaces the current object with the new value
 * @param {array<object>} data An array of objects with a member that needs to be replaced
 * @param {object} value The target object that will replace old value
 * @returns {array<object>} Updated array with new object
 */
export const findAndReplace = (data, value) => {
  const idx = data.findIndex(
    (el) => el.reimbursementId === value.reimbursementId
  );
  data[idx] = value;
  return data;
};

export const approvalAsColor = (status) => {
  if (status === "approved") return "bg-granted";
  if (status === "denied") return "bg-denied";
  if (status === "pending") return "bg-pending";
};

export const isAmountValid = (amount) => {
  if (!amount) return false;
  let temp = amount * 1;
  if (temp > 0) return true;
  return false;
};

export const employeeIdToNames = (data) => {
  const employees = {};
  data.forEach((el) => {
    employees[el.workerId] = `${el.firstName} ${el.lastName}`;
  });
  return employees;
};
