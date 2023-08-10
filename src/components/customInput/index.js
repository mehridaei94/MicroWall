import Style from "./style";

export default function CustomInput({ children, ...rest }) {
  return (
    <Style destroyOnClose {...rest}>
      {/* <i className="modal-close" onClick={rest && rest.onCancel}> */}
      {/*close icon*/}
      {/* </i> */}
      {children}
    </Style>
  );
}
