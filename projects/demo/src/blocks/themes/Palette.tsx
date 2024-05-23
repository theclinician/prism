import {
  ButtonLook,
  Color,
  Heading3,
  Tabs,
  Tab,
  useTabs,
  TBD,
  Card,
  Modal,
} from "@hakina/ui";
import { JSX, children as useChildren } from "solid-js";



const Pan = (props: {
  color: string,
}) => {
  return (
    <div style={{
      width: "40px",
      height: "40px",
      margin: "8px",
      "border-radius": "8px",
      "background-color": props.color,
    }}/>
  );
}

// const Pans = (props: {
//   children?: JSX.Element,
// }) => {
//   const c = useChildren(() => props.children)
//   return (
//     <div style={{

//     }}>
//       {c()}
//     </div>
//   )
// }

export const Palette = () => {
  
  return (
    <Card>
      <el-padded-stack>
        <Pan color="hsl(5deg 50% 50%)"/>
        <Pan color="hsl(35deg 50% 50%)"/>
        <Pan color="hsl(55deg 50% 50%)"/>
      </el-padded-stack>
    </Card>
  );
}

export default Palette;
