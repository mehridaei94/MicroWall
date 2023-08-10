import Style from "./style";
import { useEffect, useState } from "react";
import CustomInput from "../../components/customInput";
import * as constants from "./constants";
import AddField from "../../components/addField";
import CustomCheckbox from "../../components/customCheckbox";

export default function OptionSetting({ option, getSettingInfo }) {
  const [title, setTitle] = useState(null);
  const [selectOptions, setSelectOptions] = useState(null);
  const [sliderDefaultValue, setSliderDefaultValue] = useState(null);
  const [inputIsRequired, setInputRequired] = useState(null);
  const [checkboxOptions, setCheckboxOptions] = useState(null);
  const [radioOptions, setRadioOptions] = useState(null);
  const [showOptionForm, setShowOptionForm] = useState(true);

  useEffect(() => {
    const info = {
      selectOptions: selectOptions?.names,
      sliderDefaultValue,
      inputIsRequired,
      checkboxOptions: checkboxOptions?.names,
      radioOptions: radioOptions?.names,
      title,
    };
    getSettingInfo(info);
  }, [
    selectOptions,
    sliderDefaultValue,
    inputIsRequired,
    checkboxOptions,
    radioOptions,
    title,
  ]);

  const renderExteraOptionSetting = () => {
    switch (option) {
      case "TextInputOption":
        return (
          <ExtraOptionSettingInput
            onChange={(values) => {
              setInputRequired(Boolean(values.length));
            }}
          />
        );
      case "RangeInputOption":
        return (
          <ExtraOptionSettingSlider
            onChange={(e) => setSliderDefaultValue(e.target.value)}
          />
        );
      case "DropdownInputOption":
        return (
          showOptionForm ? (
            <ExtraOptionSettingSelect
              onChange={(values) => {
                setSelectOptions(values);
                setShowOptionForm(false);
              }}
            />
          ) : (selectOptions !== null && (
            <div className="options-represent">{`options:${selectOptions.names}`}</div>
          ))
        );
      case "CheckboxInputOption":
        return (
          showOptionForm ? (
            <ExtraOptionSettingCheckBox
              onChange={(values) => {
                setShowOptionForm(false);
                setCheckboxOptions(values);
              }}
            />
          ) : (checkboxOptions !== null && (
            <div className="options-represent">{`options:${checkboxOptions.names}`}</div>
          ))
        );
      case "RadioOption":
        return (
          showOptionForm ? (
            <ExtraOptionSettingRadio
              onChange={(values) => {
                setRadioOptions(values);
                setShowOptionForm(false);
              }}
            />
          ) : (radioOptions !== null && (
            <div className="options-represent">{`options:${radioOptions.names}`}</div>
          ))
        );
      default:
        return <></>;
    }
  };
  return (
    <Style>
      <div className="option-setting-container">
        <p>{`${constants.optionSettingDescription} ${option}`}</p>
        <CustomInput
          placeholder={`title`}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {renderExteraOptionSetting()}
      </div>
    </Style>
  );
}

export function ExtraOptionSettingInput({ onChange }) {
  return (
    <div className="extra-option-setting">
      <CustomCheckbox
        options={[
          {
            label: constants.isRequiredTitle,
            value: constants.isRequiredTitle,
          },
        ]}
        onChange={onChange}
      ></CustomCheckbox>
    </div>
  );
}

export function ExtraOptionSettingSlider({ onChange }) {
  return (
    <div className="extra-option-setting">
      <CustomInput placeHolder={`default value`} onChange={onChange} />
    </div>
  );
}

export function ExtraOptionSettingSelect({ onChange }) {
  return (
    <div className="extra-option-setting">
      <AddField onFinishFun={onChange} />
    </div>
  );
}

export function ExtraOptionSettingCheckBox({ onChange }) {
  return (
    <div className="extra-option-setting">
      <AddField onFinishFun={onChange} />
    </div>
  );
}

export function ExtraOptionSettingRadio({ onChange }) {
  return (
    <div className="extra-option-setting">
      <AddField onFinishFun={onChange} />
    </div>
  );
}
