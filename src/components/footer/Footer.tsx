import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import * as S from "./Footer.styled";

const Footer = () => {
  return (
    <S.Footer>
      <AiFillGithub />
      <span>
        made by
        <Link to="https://github.com/cherryc0ck/typing-game2">cherryc0ck</Link>
      </span>
    </S.Footer>
  );
};

export default Footer;
