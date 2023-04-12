import { useThemeColor } from "@/context/color/ThemeColorContext";
import { AiTwotoneHome } from "react-icons/ai";

import { Button } from "../common/button/base/Button.styled";
import * as S from "./SettingTheme.styled";

type SettingThemeProps = {
  onChangeSetting: () => void;
};

const SettingTheme = ({ onChangeSetting }: SettingThemeProps) => {
  const { changeThemeColor } = useThemeColor();
  // const theme = [
  //   {
  //     name: "Pink Theme",
  //     theme: "pink",
  //   },
  // {
  //   name: "Dark Theme",
  //   theme: "dark",
  // },
  // {
  //   name: "Purple Theme",
  //   theme: "purple",
  // },
  // {
  //   name: "Mint Theme",
  //   theme: "mint",
  // },
  // {
  //   name: "Peach Theme",
  //   theme: "peach",
  // },
  // {
  //   name: "Vanilla Theme",
  //   theme: "vanilla",
  // },
  // {
  //   name: "Light Theme",
  //   theme: "light",
  // },
  // {
  //   name: "Green Theme",
  //   theme: "green",
  // },
  // ];

  return (
    <>
      <S.ThemeContainer>
        {/* {theme.map((el) => (
          <Button onClick={() => changeThemeColor(el.theme)}>{el.name}</Button>
        ))} */}

        <Button onClick={() => changeThemeColor("pink")}>Pink Theme</Button>
        <Button onClick={() => changeThemeColor("dark")}>Dark Theme</Button>
        <Button onClick={() => changeThemeColor("purple")}>Purple Theme</Button>
        <Button onClick={() => changeThemeColor("mint")}>Mint Theme</Button>
        <Button onClick={() => changeThemeColor("peach")}>Peach Theme</Button>
        <Button onClick={() => changeThemeColor("vanilla")}>
          Vanilla Theme
        </Button>
        <Button onClick={() => changeThemeColor("light")}>Light Theme</Button>
        <Button onClick={() => changeThemeColor("green")}>Green Theme</Button>
      </S.ThemeContainer>
      <Button onClick={onChangeSetting}>
        <AiTwotoneHome />
      </Button>
    </>
  );
};

export default SettingTheme;
