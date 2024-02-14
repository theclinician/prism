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
import { Example } from "$/blocks/example";

export const SinkButtons = () => {
  const handleClick = async () => {
    // showDropdown(true);
  }

  return (
    <Card>
      <Padded>
        <Example
          code={`
            <Button
              look={ButtonLook.FILL}
              color={Color.PRIMARY}
              onClick={handleClick}
            >
              Button
            </Button>
          `}
        >
          <Button
            look={ButtonLook.FILL}
            color={Color.PRIMARY}
            onClick={handleClick}
          >
            Fill
          </Button>
        </Example>
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
