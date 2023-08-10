import styled from "styled-components";
import { Modal } from "antd";
import { palette } from "../../theme/injectGlobal";

const Style = styled(Modal)`
  .ant-modal-content {
    box-shadow: 1px 1px 1px 1px rgb(0 0 0 / 0.25);
    padding: 16px 16px 16px;
    height: 100%;
    .ant-modal-header {
      padding: 0px;
      border-bottom: none;
    }
    .ant-modal-close {
      padding: 0;
      color: white;
      .ant-modal-close-x {
        width: 24px;
        height: 24px;
        line-height: 24px;
      }
    }
  }
  &.ant-modal .ant-modal-content {
    background-color: ${palette.darkModePrimary};
  }
  &.ant-modal .ant-modal-header {
    background-color: ${palette.darkModePrimary};
    .ant-modal-title {
      color: white;
    }
  }
`;
export default Style;
