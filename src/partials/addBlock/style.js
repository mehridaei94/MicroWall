import styled from "styled-components";
import { palette } from "../../theme/injectGlobal";

const Style = styled.div`
  .add-options {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .single-option {
    padding: 12px;
    background-color: ${palette.darkGreen};
    border-radius: 30px;
    margin-right: 12px;
    margin-top: 12px;
    color: white;
    cursor: pointer;
  }
  .option-setting {
    margin-top: 16px;
  }
  .add-btn {
    .ant-btn-primary {
      border: 1px solid ${palette.lightBlue};
      background-color: transparent;
      border-radius: 30px;
    }
    margin-top: 24px;
    width: 100%;
    text-align: center;
  }
`;
export default Style;
