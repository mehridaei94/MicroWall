import React from "react";
import { Calendar} from "antd";
import Style from './style'
export default function CustomCalender({onPanelChange,  ...rest }) {

  return (
    <Style>
      <div>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} {...rest} />
      </div>
    </Style>
  );
}
