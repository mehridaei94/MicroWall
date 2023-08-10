import styled from "styled-components";
import { palette } from "../../theme/injectGlobal";

const Style = styled.div`
  .plus-container {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: fixed;
    background: ${palette.darkModePrimary};
    bottom: 20px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
  }
  .plus-container:hover {
    opacity: 0.8;
    transform: scale(1.1);
    transition: 0.5s;
  }
  .plus-icon {
    color: white;
    font-size: 32px;
  }
`;
export default Style;
