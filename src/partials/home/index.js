import PlusButton from "../../components/plusButton";
import Navbar from "../../components/navbar";
import AddBlock from "../addBlock";
import { useState, Fragment } from "react";
import CustomModal from "../../components/customModal";
import ExistingBlocks from "../existingBlocks";
import useBlockStore from "../../containers/blocks";
import { Switch } from "antd";

export default function Home() {
  const [openOptionState, setOpenOptionState] = useState(false);
  const [viewMode, setViewMode] = useState(false);

  const blockStore = useBlockStore((store) => ({
    state: store,
    items: store?.items,
  }));


  const addBlockContainer = () => {
    return (
      <CustomModal
        style={{ width: "100%" }}
        title={"add Block"}
        onCancel={() => {
          setOpenOptionState(false);
        }}
        visible={openOptionState}
      >
        <AddBlock closeContainer={() => setOpenOptionState(false)} />
      </CustomModal>
    );
  };
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="text-white margin-b-24">render submitted content</div>
        <div className="text-white">add new content box</div>
        <div className="flex-row">
          <p className="margin-r-8 text-white">view mode</p>
          <Switch value={viewMode} onChange={() => setViewMode(!viewMode)} />
        </div>

        <ExistingBlocks blocksArray={blockStore.items} />
        {!viewMode && (
          <PlusButton
            onClickFun={() => {
              setOpenOptionState(true);
            }}
          />
        )}

        {addBlockContainer()}
      </div>
    </Fragment>
  );
}
