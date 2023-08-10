import * as constants from "./constants";
import Style from "./style";
import { useState } from "react";
import OptionSetting from "../optionSetting";
import { Button } from "antd";
import useBlockStore from "../../containers/blocks";

export default function AddItem({closeContainer}) {
  const [openOptionSetting, setOpenOptionSetting] = useState(null);
  const [settingInfo, setSettingInfo] = useState(null);
  const blockStore = useBlockStore((store) => ({
    state: store,
    addItem: store?.addItem,
    items: store?.items,
  }));
  const submitBlock = () => {
    let settingOption = {};
    switch (openOptionSetting) {
      case "TextInputOption":
        settingOption = {
          isRequired: settingInfo.inputIsRequired,
          title: settingInfo.title,
        };
        break;
      case "RangeInputOption":
        settingOption = {
          defaultValue: settingInfo.sliderDefaultValue,
          title: settingInfo.title,
        };
        break;
      case "DropdownInputOption":
        settingOption = {
          options: settingInfo.selectOptions,
          title: settingInfo.title,
        };
        break;
      case "CheckboxInputOption":
        settingOption = {
          options: settingInfo.checkboxOptions,
          title: settingInfo.title,
        };
        break;
      case "RadioOption":
        settingOption = {
          options: settingInfo.radioOptions,
          title: settingInfo.title,
        };
        break;
      default:
        settingOption = {
          title: settingInfo.title,
        };
    }
    const blockInfo = {
      type: openOptionSetting,
      setting: {
        ...settingOption,
      },
      positionIndex:blockStore.items.length+1,
    };
    blockStore.addItem(blockInfo)
    closeContainer()
  };
  return (
    <Style>
      <div className="add-item-container">
        <div className="add-options">
          <OptionsForAdd
            options={constants.options}
            choosenOption={(option) => setOpenOptionSetting(option)}
          />
        </div>
        {openOptionSetting !== null && (
          <>
            <div className="option-setting">
              <OptionSetting
                option={openOptionSetting}
                getSettingInfo={(info) => setSettingInfo(info)}
              />
            </div>
            <div className="add-btn">
              <Button
                type="primary"
                className="add-btn"
                htmlType="add"
                onClick={() => submitBlock()}
              >
                add
              </Button>
            </div>
          </>
        )}
      </div>
    </Style>
  );
}

export function OptionsForAdd({ options, choosenOption }) {
  if (options.length !== 0) {
    return options.map((option) => {
      return (
        <div
          className="single-option"
          key={option.id}
          onClick={() => choosenOption(option.id)}
        >
          <span>{option.title}</span>
        </div>
      );
    });
  }
}
