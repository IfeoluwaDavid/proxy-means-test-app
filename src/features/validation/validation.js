let validation = {};

function validateNames(firstName, lastName) {}
function validateEmail(emailAddress) {}
function validatePasswords(password, confirmedPassword) {}

validation.validateRegistration = function (data) {
  const hasValidNames = validateNames(data.firstName, data.lastName);
  const hasValidEmail = validateEmail(data.emailAddress);
  const hasValidPasswords = validatePasswords(
    data.password,
    data.confirmedPassword
  );

  if (hasValidNames && hasValidEmail && hasValidPasswords) {
    return { status: true, message: null };
  } else {
    return { status: false, message: null };
  }
};

module.exports = validation;
