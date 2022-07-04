export function requiredValidator(value) {
  if (!value || value === "") {
    return false;
  }
  return true;
}

export function regexValidator(value, regex) {
  if (!regex.test(value)) {
    return false;
  }
  return true;
}

export function lengthValidator(value, min, max) {
  if (value.length < min || value.length > max) {
    return false;
  }
  return true;
}

export function emailValidator(value) {
  var mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if (!mailFormat.test(value)) {
    return false;
  }
  return true;
}