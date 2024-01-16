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
} from "@zedoc/prism";
import Code from "$/blocks/example/Code";
import Demo from "$/blocks/example/Demo";


export const SinkButtons = () => {
  const handleClick = async () => {
    // showDropdown(true);
  }

  return (
    <Card>
      <Padded>
        <Code>
          {`
            <Button
              look={ButtonLook.FILL}
              color={Color.PRIMARY}
              onClick={handleClick}
            >
              Button
            </Button>
          `}
        </Code>
        <Demo>
          <Button
            look={ButtonLook.FILL}
            color={Color.PRIMARY}
            onClick={handleClick}
          >
            Fill
          </Button>
        </Demo>
        <Button
          look={ButtonLook.FILL}
          color={Color.PRIMARY}
          disabled
        >
          Disabled
        </Button>
      </Padded>
      <Padded>
        <Button
          look={ButtonLook.GHOST}
          color={Color.PRIMARY}
        >
          Ghost
        </Button>
        <Button
          look={ButtonLook.GHOST}
          color={Color.PRIMARY}
          disabled
        >
          Disabled
        </Button>
      </Padded>
      <Padded>
        <Button
          look={ButtonLook.OUTLINE}
          color={Color.PRIMARY}
        >
          Outline
        </Button>
        <Button
          look={ButtonLook.OUTLINE}
          color={Color.NEUTRAL}
        >
          Neutral
        </Button>
        <Button
          look={ButtonLook.OUTLINE}
          color={Color.ERROR}
        >
          Error
        </Button>
      </Padded>
    </Card>
  );
}

export default SinkButtons;
