import { JSX, children as useChildren } from "solid-js";
import "$/body/reset.scss";
import "$/body/main.scss";


const PrismWrap = (props: {
  children?: JSX.Element,
}) => {
  const c = useChildren(() => props.children);
  return <>{c()}</>;
}

export default PrismWrap;
