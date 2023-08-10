import { Select } from "antd";
import Style from "./style";

export default function CustomSelect({ options, ...rest }) {

  return (
    <Style>
      <Select
        destroyOnClose
        options={options}
        {...rest}
        dropdownStyle={{ backgroundColor: "#D4F1F4" }}
      />
    </Style>
  );
}
