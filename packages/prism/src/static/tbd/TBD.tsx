import { JSX, splitProps } from "solid-js";
import style from "./TBD.module.scss";
import src from "./tbd.png";


const TBD = (allProps: {
  children?: JSX.Element,
}) => {
  const [props, other] = splitProps(allProps, [
    "children",
  ]);

  return (
    <div
      classList={{
        [style.tbd]: true,
      }}
      style={{
        "background-image": `url(${src})`,
      }}
      {...other}
    />
  );
}

export default TBD;
