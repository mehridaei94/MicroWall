import Style from "./style";
import { PlusOutlined } from "@ant-design/icons";
export default function PlusButton({onClickFun}) {
    return (
      <Style>
        <div className="plus-container" onClick={() => onClickFun()}>
          <PlusOutlined className="plus-icon" />
        </div>
      </Style>
    );
}