import styled from "styled-components";
import { Input } from "antd";


const Style = styled(Input)`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  border-radius: 0;
  .ant-input-group-addon {
    background-color: white;
  }
  .ant-input:focus,.ant-input-focused{
    box-shadow: none;
  }
`;
export default Style;
