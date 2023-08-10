import { useState } from "react";
import { Menu, Skeleton } from "antd";
import { defaultNavbarData } from "../../data/defaultNavbarData";
import Style from './style'
export default function Navbar({
  navbarItems =  defaultNavbarData ,
  logoSrc,
}) {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Style>
      <div className="navbar-container">
        <div className="navbar-logo">
          {Boolean(logoSrc) ? (
            <img src={logoSrc} />
          ) : (
            <Skeleton.Image active className="skeleton-image" />
          )}
        </div>
        <div className="menu-container">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={navbarItems}
            className="navbar"
          />
        </div>
      </div>
    </Style>
  );
}
