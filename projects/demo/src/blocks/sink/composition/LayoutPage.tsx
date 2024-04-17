import {
  Scroll,
} from "@theclinician/prism";
import Example from "$/blocks/example/Example";


export const Layout = () => {
  
  return (
    <v-scroll>
      <Example code={`<body>`}>
      </Example>
      <Example code={`<div id="root">`}>
      </Example>
      <Example code={`<PrismWrap>`}>
      </Example>
    </v-scroll>

  );
}

export default Layout;
