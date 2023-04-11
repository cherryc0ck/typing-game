export const isNumKeyCheck = (keyCode: string): boolean => {
  const regex = /^[0-9]+$/;
  return regex.test(keyCode);
};

export const isSpecialKeyCheck = (keyCode: string): boolean => {
  // eslint-disable-next-line no-useless-escape
  const regex = /[\{\}\[\]\/?₩.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
  return regex.test(keyCode);
};

export const isStrKeyCheck = (keyCode: string): boolean => {
  const regex = /^[a-zㄱ-ㅎ]/;
  return regex.test(keyCode);
};

export const isFuncKeyCheck = (keyCode: string): boolean => {
  const funcCode = [
    "Enter",
    "Tab",
    "CapsLock",
    "LeftShift",
    "RightShift",
    "Backspace",
  ];
  return funcCode.includes(keyCode);
};
