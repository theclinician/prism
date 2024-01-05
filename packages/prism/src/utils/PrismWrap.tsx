import { JSX, children as useChildren } from "solid-js";
import "$/style/reset.scss";
import "$/style/theme.scss";


const PrismWrap = (props: {
  children?: JSX.Element,
}) => {
  const c = useChildren(() => props.children);
  return <>{c()}</>;
}

export default PrismWrap;
