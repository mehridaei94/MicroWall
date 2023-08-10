import styled from "styled-components";

const Style = styled.div`
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    border-radius: 0;
  }
  .ant-select,
  .ant-select-selection-search-input,
  .ant-select-selection-search,
  .ant-select-selection-item,
  .ant-select-suffix {
    color: white;
  }
  .ant-select-single {
    &.ant-select-open {
      .ant-select-selection-item {
        color: white;
      }
    }
  }
`;
export default Style;
