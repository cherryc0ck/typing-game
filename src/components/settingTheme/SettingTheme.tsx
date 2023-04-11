import { useThemeColor } from "@/context/color/ThemeColorContext";
import { Button } from "../common/button/base/Button.styled";
import * as S from "./SettingTheme.styled";

type SettingThemeProps = {
  onChangeSetting: () => void;
};

const SettingTheme = ({ onChangeSetting }: SettingThemeProps) => {
  const { themeColor, changeThemeColor } = useThemeColor();

  const test1 = () => {
    changeThemeColor("pink");
    console.log(themeColor);
  };

  const test2 = () => {
    changeThemeColor("dark");
    console.log(themeColor);
  };

  return (
    <>
      <S.ThemeContainer>
        <Button onClick={test1}>Pink Theme</Button>
        <Button onClick={test2}>Dark Theme</Button>
      </S.ThemeContainer>
      <button>Go Home</button>
    </>
  );
};

export default SettingTheme;
