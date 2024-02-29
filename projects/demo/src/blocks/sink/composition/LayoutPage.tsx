import {
  HStack,
  VStack,
  Scroll,
} from "@zedoc/prism";
import Example from "$/blocks/example/Example";


export const Layout = () => {
  
  return (
    <Scroll>
      <Example code={`<body>`}>
      </Example>
      <Example code={`<div id="root">`}>
      </Example>
      <Example code={`<PrismWrap>`}>
      </Example>
    </Scroll>

  );
}

export default Layout;
