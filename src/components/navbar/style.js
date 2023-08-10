import styled from "styled-components";
import { palette } from "../../theme/injectGlobal";
const Style = styled.div`
  .navbar-container {
    display: flex;
    flex-direction: row;
    height: 100px;
    width: calc(100% - 32px);
    align-items: center;
    margin: 16px;
    margin-top: 0;
  }
  .navbar-logo image,
  .navbar-logo svg {
    width: 50px;
    height: 50px;
  }
  .navbar-logo {
    margin-left: 16px;
    .ant-skeleton.ant-skeleton-element .ant-skeleton-image {
      width: 50px;
      height: 50px;
      background-color: transparent;
    }
  }
  .skeleton-image,
  .skeleton-image .ant-skeleton-element {
    width: 50px;
    height: 50px;
  }
  .menu-container .ant-menu {
    background-color: transparent;
    color: white;
    margin-right: 16px;
    font-size: 20px;
  }
  .menu-container {
    width: 100%;
    margin-left: 16px;
    .ant-menu-light.ant-menu-horizontal > .ant-menu-item-selected,
    .ant-menu-light > .ant-menu.ant-menu-horizontal > .ant-menu-item-selected,
    .ant-menu-light.ant-menu-horizontal > .ant-menu-submenu-selected,
    .ant-menu-light
      > .ant-menu.ant-menu-horizontal
      > .ant-menu-submenu-selected {
      color: ${palette.lightBlue};
    }
    .ant-menu-light.ant-menu-horizontal > .ant-menu-item-selected::after,
    .ant-menu-light
      > .ant-menu.ant-menu-horizontal
      > .ant-menu-item-selected::after,
    .ant-menu-light.ant-menu-horizontal > .ant-menu-submenu-selected::after,
    .ant-menu-light
      > .ant-menu.ant-menu-horizontal
      > .ant-menu-submenu-selected::after {
      border-bottom-color: ${palette.lightBlue};
    }
    .ant-menu-light
      .ant-menu-item:not(.ant-menu-item-selected):not(
        .ant-menu-submenu-selected
      ):hover,
    .ant-menu-light
      > .ant-menu
      .ant-menu-item:not(.ant-menu-item-selected):not(
        .ant-menu-submenu-selected
      ):hover,
    .ant-menu-light
      .ant-menu-item:not(.ant-menu-item-selected):not(
        .ant-menu-submenu-selected
      )
      > .ant-menu-submenu-title:hover,
    .ant-menu-light
      > .ant-menu
      .ant-menu-item:not(.ant-menu-item-selected):not(
        .ant-menu-submenu-selected
      )
      > .ant-menu-submenu-title:hover {
      color: white;
    }
    .ant-menu-light.ant-menu-horizontal > .ant-menu-item:hover::after,
    .ant-menu-light
      > .ant-menu.ant-menu-horizontal
      > .ant-menu-item:hover::after,
    .ant-menu-light.ant-menu-horizontal > .ant-menu-submenu:hover::after,
    .ant-menu-light
      > .ant-menu.ant-menu-horizontal
      > .ant-menu-submenu:hover::after,
    .ant-menu-light.ant-menu-horizontal > .ant-menu-item-active::after,
    .ant-menu-light
      > .ant-menu.ant-menu-horizontal
      > .ant-menu-item-active::after,
    .ant-menu-light.ant-menu-horizontal > .ant-menu-submenu-active::after,
    .ant-menu-light
      > .ant-menu.ant-menu-horizontal
      > .ant-menu-submenu-active::after,
    .ant-menu-light.ant-menu-horizontal > .ant-menu-item-open::after,
    .ant-menu-light
      > .ant-menu.ant-menu-horizontal
      > .ant-menu-item-open::after,
    .ant-menu-light.ant-menu-horizontal > .ant-menu-submenu-open::after,
    .ant-menu-light
      > .ant-menu.ant-menu-horizontal
      > .ant-menu-submenu-open::after {
      border-bottom-color: ${palette.lightBlue};
    }
  }
`;

export default Style;
