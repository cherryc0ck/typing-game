export type PropsKeyCode = {
  data: KeyCode;
  isEffect: boolean;
};

export type KeyCode = {
  code: string;
  main: string;
  sub?: string;
};
