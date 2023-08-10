import Style from "./style";

export default function CustomCheckbox({
  children,
  className,
  onChangeFunc,
  checked,
  options,
  ...rest
}) {
  return (
    <Style
      checked={checked}
      options={options}
      destroyOnClose
      onClick={onChangeFunc}
      className={`custom-checkbox ${className}`}
      {...rest}
    >
      {/* <i className="modal-close" onClick={rest && rest.onCancel}> */}
      {/*close icon*/}
      {/* </i> */}
      {children}
    </Style>
  );
}
