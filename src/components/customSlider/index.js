import Style from "./style";
import { Slider } from "antd";

export default function CustomSlider({ disabled=false, defaultValue=30, onChange, ...rest }) {
  return (
    <Style>
      <Slider
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
      />
    </Style>
  );
}
