import {
  Button,
  ButtonLook,
  Color,
  Heading3,
  Tabs,
  Tab,
  useTabs,
  Padded,
  HStack,
  VStack,
  MStack,
  TBD,
  Card,
  Modal,
} from "@theclinician/prism";
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
      <Padded>
        <Pan color="hsl(5deg 50% 50%)"/>
        <Pan color="hsl(35deg 50% 50%)"/>
        <Pan color="hsl(55deg 50% 50%)"/>
      </Padded>
    </Card>
  );
}

export default Palette;
