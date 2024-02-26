import { JSX, createSignal, onMount, children as useChildren } from "solid-js";

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
  FeedHeader,
  TBD,
  FeedCard,
  Card,
  Feed,
  Modal,
} from "@zedoc/prism";
import style from "./ThemePage.module.scss";
import { useAnchors } from "$/blocks/anchors";


function componentToHex(c: number) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const ColorBox = (props: {
  color: string,
}) => {
  const [value, setValue] = createSignal("");
  const [light, setLight] = createSignal(false);

  let div: HTMLDivElement | undefined = undefined;

  onMount(() => {
    const rgb = getComputedStyle(div!).backgroundColor.match(/rgb\W*(\w+)\W*(\w+)\W*(\w+)\W*/);
    if(rgb) {
      const r = +rgb[1];
      const g = +rgb[2];
      const b = +rgb[3];
      const sum = 0.299 * r * r + 0.587 * g * g + 0.114 * b * b;
      setValue(rgbToHex(r, g, b));
      if(sum > 0.52 * 255 * 255) {
        setLight(true);
      }
    }
  });

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
  }

  return (
    <div
      classList={{
        [style.colorBox]: true,
        [style.light]: light(),
      }}
      style={{
        "background-color": `var(${props.color})`,
      }}
      ref={div}
    >
      <div
        onClick={() => handleCopy(props.color)}
      >
        {props.color}
      </div>
      <div
        onClick={() => handleCopy(value())}
        class={style.colorHex}
      >
        {value()}
      </div>
    </div>
  )
}


const ColorLine = (props: {
  children?: JSX.Element,
}) => {
  const c = useChildren(() => props.children);
  return (
    <div class={style.colorLine}>
      {c()}
    </div>
  );
}

const FontBox = (props: {
  font: string,
}) => {
  return (
    <div
      class={style.fontBox}
      style={{
        font: `var(${props.font})`,
      }}
    >
      {props.font}
    </div>
  );
}



export const Template = () => {
  const [anchors] = useAnchors();
  
  return (
    <Feed>
      <FeedHeader ref={anchors["colors"]}>
        Colors
      </FeedHeader>
      <FeedCard>
        
        <ColorLine>
          {/* <ColorBox color="--clinic-color-blue-1"/> */}
          <ColorBox color="--clinic-color-blue-2"/>
          <ColorBox color="--clinic-color-blue-3"/>
          <ColorBox color="--clinic-color-blue-4"/>
          <ColorBox color="--clinic-color-blue-5"/>
        </ColorLine>
        
        <ColorLine>
          <ColorBox color="--clinic-color-red-2"/>
          <ColorBox color="--clinic-color-red-3"/>
          <ColorBox color="--clinic-color-red-4"/>
        </ColorLine>
        
        <ColorLine>
          <ColorBox color="--clinic-color-yellow-2"/>
          <ColorBox color="--clinic-color-yellow-3"/>
          <ColorBox color="--clinic-color-yellow-4"/>
        </ColorLine>

        <ColorLine>
          <ColorBox color="--clinic-color-green-2"/>
          <ColorBox color="--clinic-color-green-3"/>
          <ColorBox color="--clinic-color-green-4"/>
        </ColorLine>

        <ColorLine>
          <ColorBox color="--clinic-color-white-1"/>
          <ColorBox color="--clinic-color-white-2"/>
          <ColorBox color="--clinic-color-white-3"/>
        </ColorLine>
        <ColorLine>
          <ColorBox color="--clinic-color-silver-2"/>
          <ColorBox color="--clinic-color-silver-3"/>
          <ColorBox color="--clinic-color-silver-4"/>
        </ColorLine>
        <ColorLine>
          <ColorBox color="--clinic-color-grey-2"/>
          <ColorBox color="--clinic-color-grey-3"/>
          <ColorBox color="--clinic-color-grey-4"/>
        </ColorLine>
        <ColorLine>
          <ColorBox color="--clinic-color-black-3"/>
          <ColorBox color="--clinic-color-black-4"/>
          <ColorBox color="--clinic-color-black-5"/>
        </ColorLine>
      </FeedCard>

      <FeedHeader ref={anchors["fonts"]}>
        Fonts
      </FeedHeader>
      <FeedCard>
        <FontBox font="--clinic-font-heading-1"/>
        <FontBox font="--clinic-font-heading-2"/>
        <FontBox font="--clinic-font-heading-3"/>
        <FontBox font="--clinic-font-heading-4"/>
        <FontBox font="--clinic-font-subheader-regular"/>
        <FontBox font="--clinic-font-subheader-medium"/>
        <FontBox font="--clinic-font-body-regular"/>
        <FontBox font="--clinic-font-body-medium"/>
        <FontBox font="--clinic-font-body-bold"/>
        <FontBox font="--clinic-font-small-regular"/>
        <FontBox font="--clinic-font-small-medium"/>
        <FontBox font="--clinic-font-small-bold"/>
        <FontBox font="--clinic-font-caption-regular"/>
        <FontBox font="--clinic-font-tiny-regular"/>
      </FeedCard>

    </Feed>

    


  );
}

export default Template;
