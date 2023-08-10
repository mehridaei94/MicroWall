import styled from "styled-components";
import { palette } from "../../theme/injectGlobal";

const Style = styled.div`
  .ant-btn > span {
    color: white;
  }
  .ant-btn-dashed {
    background-color: transparent;
  }
  .ant-btn-primary {
    background-color: transparent;
    border: 1px solid ${palette.lightBlue};
    border-radius: 30px;
  }
  .ant-form-item .ant-form-item-label > label {
    color: white;
  }
  .anticon-minus-circle {
    color: white;
  }
`;
export default Style;
