import type { PropsKeyCode } from "@/types/keyCode";
import {
  isNumKeyCheck,
  isSpecialKeyCheck,
  isStrKeyCheck,
  isFuncKeyCheck,
} from "@/utils/keyCodeCheck";
import { SpecialKey } from "./SpecialKey";
import { AlphabetKey } from "./AlphabetKey";
import { FunctionalKey } from "./FunctionalKey";

type KeyProps = PropsKeyCode & {
  isEn: boolean;
};

const Key = ({ data, isEffect, isEn }: KeyProps) => {
  const { code } = data;

  if (isNumKeyCheck(code) || isSpecialKeyCheck(code)) {
    return <SpecialKey data={data} isEffect={isEffect} />;
  }
  if (isStrKeyCheck(code)) {
    return <AlphabetKey data={data} isEffect={isEffect} isEn={isEn} />;
  }
  if (isFuncKeyCheck(code)) {
    return <FunctionalKey data={data} isEffect={isEffect} />;
  }

  return <li>error</li>;
};

export default Key;
