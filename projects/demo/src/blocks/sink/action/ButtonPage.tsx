import {
  Button,
  ButtonLook,
  Color,
  Heading3,
  Tabs,
  Tab,
  useTabs,
  TBD,
  Card,
  Modal,
} from "@theclinician/prism";
import { Example } from "$/blocks/example";

export const ButtonPage = () => {
  const handleClick = async () => {
    // showDropdown(true);
  }

  return (
    <Card>
      <padded-stack>
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
      </padded-stack>
      <padded-stack>
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
      </padded-stack>
      <padded-stack>
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
      </padded-stack>
    </Card>
  );
}

export default ButtonPage;
