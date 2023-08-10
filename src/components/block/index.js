
import { CloseOutlined } from "@ant-design/icons";
import Style from "./style";
import useBlockStore from "../../containers/blocks";

export default function Block({ children, id, }) {
  const blockStore = useBlockStore((store) => ({
    removeItem: store?.removeItem,
    items: store?.items,
  }));
  const removeBlock = () => {
    blockStore.removeItem(id);
    let items = blockStore.items;
  };
  return (
    <Style
      key={id}
      id={id}
    >
      <div className="card-container">
        {children}
        <div className="remove-item-icon" onClick={() => removeBlock()}>
          <CloseOutlined />
        </div>
      </div>
    </Style>
  );
}