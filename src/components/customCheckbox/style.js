import styled from "styled-components";
import { Checkbox } from "antd";
import { palette } from "../../theme/injectGlobal";

const Style = styled(Checkbox.Group)`
  &.custom-checkbox {
    .ant-checkbox-wrapper {
      span {
        color: white;
      }
      .ant-checkbox {
        .ant-checkbox-inner {
          border: 1px solid ${palette.darkGreen};
          background-color: ${palette.darkGreen};
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
      }
      .ant-checkbox-checked {
        .ant-checkbox-inner {
          border: ${palette.darkGreen};
          background-color: ${palette.darkGreen};
          &::after {
            width: 5px;
            height: 12px;
            top: 48%;
            left: 29.5%;
          }
        }
        &::after {
          border: none;
        }
        &::hover {
          &::after {
            border: none;
          }
        }
      }
    }
  }
  .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled)
    .ant-checkbox-inner {
    background-color: ${palette.darkGreen};
  }
`;
export default Style;
