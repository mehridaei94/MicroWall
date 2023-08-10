import styled from "styled-components";
import { palette } from "../../theme/injectGlobal";

const Style = styled.div`
  width: 100%;
  background-color: transparent;
  .card-container {
    background: ${palette.darkModePrimary};
    border-radius: 10px;
    box-sizing: border-box;
    padding: 16px;
    margin: 0 auto;
    color: white;
    text-align: initial;
    margin-top: 24px;
    position: relative;
  }
  .remove-item-icon {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #de006f;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default Style;
