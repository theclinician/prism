import { JSX, children as useChildren } from "solid-js";
import "__/body/reset.scss";
import "__/body/main.scss";


const PrismWrap = (props: {
  children?: JSX.Element,
}) => {
  const c = useChildren(() => props.children);
  return <>{c()}</>;
}

export default PrismWrap;
