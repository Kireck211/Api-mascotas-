const isEmpty = (string) => string.length === 0;

const defaultIfEmpty = (value, defaultString) => isEmpty(value) ? defaultString : value;

module.exports = {
  isEmpty,
  defaultIfEmpty,
};