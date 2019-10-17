export const required = (value) => {
  if(value) return undefined;
  return "You must enter message";
};

export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length >= maxLength) return `Not more ${maxLength} symbols`;
    return undefined;
};