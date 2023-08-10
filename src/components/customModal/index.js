import { CloseCircleOutlined } from "@ant-design/icons";
import Style from "./style";

export default function CustomModal({ children, className, ...rest }) {
  const renderCloseIcon = <CloseCircleOutlined />;
  return (
    <Style
      destroyOnClose
      closeIcon={renderCloseIcon}
      className={`custom-modal ${className}`}
      footer={null}
      {...rest}
    >
      {/* <i className="modal-close" onClick={rest && rest.onCancel}> */}
      {/*close icon*/}
      {/* </i> */}
      {children}
    </Style>
  );
}
