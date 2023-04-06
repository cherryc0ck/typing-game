import * as S from "./Keyboard.styled";

import type { KeyCode } from "@/types/keyCode";
import { KEY_BOARD } from "@/static/keyCode";
import useKeyEventListener from "@/hooks/useKeyEvent";
import Key from "@/components/keyboard/key/Key";

const Keyboard = () => {
  const { currentKey, isEn } = useKeyEventListener();

  const isEffect = (el: KeyCode) => el.code === currentKey;

  return (
    <S.Container>
      {KEY_BOARD.map((keyboard, idx) => (
        <ul key={idx}>
          {keyboard.map((el: KeyCode, idx) => (
            <Key key={idx} data={el} isEffect={isEffect(el)} isEn={isEn} />
          ))}
        </ul>
      ))}
    </S.Container>
  );
};

export default Keyboard;
