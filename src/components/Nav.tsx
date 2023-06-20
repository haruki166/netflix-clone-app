import React, { useEffect, useState } from "react";
import "./Nav.scss";

type Props = {
  clasName?: string;
};

const Nav = (props: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    //画面をするロールするたびhandleShow関数発火。
    const handleShow = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleShow);
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <div className={`Nav ${show && "Nav-black"}`}>
      <img
        className="Nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt=""
      />

      <img
        className="Nav-avater"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt=""
      />
    </div>
  );
};

export default Nav;
