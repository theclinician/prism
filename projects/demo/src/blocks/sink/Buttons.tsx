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


export const SinkButtons = () => {
  const handleClick = async () => {
    // showDropdown(true);
  }

  return (
    <Card>
      <Padded>
        <div style={{"font-family": "'Fira Mono', monospace", "white-space": "pre"}}>
          {`
            <Button
              look={ButtonLook.FILL}
              color={Color.PRIMARY}
              onClick={handleClick}
            >
              Fill
            </Button>  
          `}
        </div>
        <Button
          look={ButtonLook.FILL}
          color={Color.PRIMARY}
          onClick={handleClick}
        >
          Fill
        </Button>
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
