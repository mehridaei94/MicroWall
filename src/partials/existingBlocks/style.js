import styled from "styled-components";
import { palette } from "../../theme/injectGlobal";

const Style = styled.div`
  width: 100%;
  .ant-radio-wrapper span.ant-radio + * {
    color: white;
  }
  .filled-container {
    margin-top: 8px;
  }
  .ant-radio-wrapper .ant-radio-checked .ant-radio-inner {
    background-color: ${palette.darkGreen};
    border-color: ${palette.darkGreen};
  }
`;
export default Style;
