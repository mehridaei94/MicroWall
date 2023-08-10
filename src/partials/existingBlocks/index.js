import CustomCalender from "../../components/customCalender";
import CustomCheckbox from "../../components/customCheckbox";
import CustomInput from "../../components/customInput";
import CustomSelect from "../../components/customSelect";
import CustomSlider from "../../components/customSlider";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, Radio } from "antd";
import Style from "./style";
import useBlockStore from "../../containers/blocks";
import { useEffect, useState } from "react";
import Block from "../../components/block";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function ExistingBlocks() {
  const [blocks, setBlocks] = useState([]);
  const blockStore = useBlockStore((store) => ({
    state: store,
    updateAllItems: store?.updateAllItems,
    items: store?.items,
  }));
  useEffect(() => {
    if (blockStore?.items) {
      setBlocks(blockStore?.items);
    }
  }, [blockStore.items]);

  const desiredComponent = (block) => {
    switch (block.type) {
      case "TextInputOption":
        return <InputBlock info={block} />;
      case "MarkupInputOption":
        return <InputMarkupBlock info={block} />;
      case "CalendarInputOption":
        return <CalenderBlock info={block} />;
      case "PhoneNumberInputOption":
        return <InputPhoneNumberBlock info={block} />;
      case "RangeInputOption":
        return <RangeBlock info={block} />;
      case "DropdownInputOption":
        return <SelectBlock info={block} />;
      case "CheckboxInputOption":
        return <CheckBoxBlock info={block} />;
      case "RadioOption":
        return <RadioBlock info={block} />;
      case "FileInputOption":
        return <FileBlock info={block} />;
      default:
        return <></>;
    }
  };

  const renderBlockPerType = () => {
    if (blocks && blocks.length !== 0) {
      return blocks.map((block) => {
        return (
          <Block id={block.id} index={block.positionIndex}>
            {desiredComponent(block)}
          </Block>
        );
      });
    }
  };
  return <Style>{renderBlockPerType()}</Style>;
}

export function InputBlock({ info }) {
  return (
    <div className="item-container" key={info?.id}>
      <p>{info?.setting?.title} </p>
      <CustomInput
        placeholder={info?.setting?.title}
        isRequired={info?.setting?.isRequired}
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}

export function InputPhoneNumberBlock({ info }) {
  return (
    <div className="item-container" key={info?.id}>
      <p>{info?.setting?.title} </p>
      <CustomInput
        placeholder={info?.setting?.title}
        type="number"
        maxLength={11}
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}
export function InputMarkupBlock({ info }) {
  const [filledInfo, setFilledInfo] = useState(null);
  console.log("here title", info);
  return (
    <div className="item-container" key={info?.id}>
      <p>{info?.setting?.title} </p>
      <CustomInput
        placeholder={info?.setting?.title}
        onChange={(e) => setFilledInfo(e.target.value)}
      />
      {Boolean(filledInfo) && (
        <div className="filled-container">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} children={filledInfo} />
        </div>
      )}
    </div>
  );
}

export function CalenderBlock({ info }) {
  return (
    <div className="item-container" key={info?.id}>
      <p>{info?.setting?.title} </p>
      <CustomCalender
        onPanelChange={(value, mode) =>
          console.log(value.format("YYYY-MM-DD"), mode)
        }
      />
    </div>
  );
}

export function RangeBlock({ info }) {
  return (
    <div className="item-container" key={info?.id}>
      <p>{info?.setting?.title} </p>
      <CustomSlider
        defaultValue={info?.setting?.defaultValue}
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}

export function SelectBlock({ info }) {
  const getOptions = () => {
    let items = [];
    if (info?.setting?.options.length !== 0) {
      info?.setting?.options.map((item) => {
        const newOption = {
          value: item,
          label: item,
        };
        items = [...items, newOption];
      });
    }
    return items;
  };
  return (
    <div className="item-container" key={info?.id}>
      <p>{info?.setting?.title} </p>
      <CustomSelect
        placeholder={info?.setting?.title}
        options={getOptions()}
        onChange={(value) => console.log("choosen", value)}
      />
    </div>
  );
}

export function CheckBoxBlock({ info }) {
  const getOptions = () => {
    let items = [];
    if (info?.setting?.options.length !== 0) {
      info?.setting?.options.map((item) => {
        const newOption = {
          value: item,
          label: item,
        };
        items = [...items, newOption];
      });
    }
    return items;
  };
  return (
    <div className="item-container" key={info?.id}>
      <p>{info?.setting?.title} </p>
      <CustomCheckbox
        options={getOptions()}
        onChange={(values) => console.log(values)}
      />
    </div>
  );
}

export function RadioBlock({ info }) {
  const optionsRender = () => {
    if (info?.setting?.options.length !== 0) {
      return info?.setting?.options.map((item, index) => {
        return (
          <Radio value={item} key={item}>
            {item}
          </Radio>
        );
      });
    }
  };
  return (
    <div className="item-container" key={info?.id}>
      <p>{info?.setting?.title} </p>
      <Radio.Group onChange={(e) => console.log(e.target.value)}>
        {optionsRender()}
      </Radio.Group>
    </div>
  );
}

export function FileBlock({ info }) {
  return (
    <div className="item-container" key={info?.id}>
      <p>{info?.setting?.title} </p>
      <Upload>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </div>
  );
}
