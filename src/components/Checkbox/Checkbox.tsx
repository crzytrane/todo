import { CheckboxOuter, Tick } from "./Checkbox.styles";

type Props = {
  selected?: boolean;
  handleClick: () => void;
  size?: Size;
};

const Checkbox: React.FC<Props> = ({ selected = false, handleClick, size }) => {
  const displaySize: Size = size ?? "1rem";

  return (
    <CheckboxOuter size={displaySize} onClick={handleClick}>
      {selected && <Tick size={displaySize} />}
    </CheckboxOuter>
  );
};

export default Checkbox;
