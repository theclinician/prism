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
  Feed,
  FeedHeader,
  FeedCard,
} from "@theclinician/prism";
import { Example } from "$/blocks/example";

export const ActionPage = () => {
  
  return (
    <Feed>
      <FeedHeader>
        Buttons
      </FeedHeader>

      <Example
        code={`
          <Button/>
        `}
      >
        <padded-stack><div>
          <Button
            look={ButtonLook.GHOST}
          >
            GHOST
          </Button>
          <Button
            look={ButtonLook.FILL}
          >
            FILL
          </Button>
          <Button
            look={ButtonLook.FLAT}
          >
            FLAT
          </Button>
          <Button
            look={ButtonLook.OUTLINE}
          >
            OUTLINE
          </Button>
        </div></padded-stack>
      </Example>

      <Example
        code={`
          <Button disabled/>
        `}
      >
        <padded-stack>
          <Button
            look={ButtonLook.GHOST}
            disabled
          >
            GHOST
          </Button>
          <Button
            look={ButtonLook.FILL}
            disabled
          >
            FILL
          </Button>
          <Button
            look={ButtonLook.FLAT}
            disabled
          >
            FLAT
          </Button>
          <Button
            look={ButtonLook.OUTLINE}
            disabled
          >
            OUTLINE
          </Button>
        </padded-stack>
      </Example>

      <Example
        code={`
          <Button wide/>
        `}
      >
        <padded-stack><div>
          <Button
            look={ButtonLook.GHOST}
            wide
          >
            GHOST
          </Button>
          <Button
            look={ButtonLook.FILL}
            wide
          >
            FILL
          </Button>
          <Button
            look={ButtonLook.FLAT}
            wide
          >
            FLAT
          </Button>
          <Button
            look={ButtonLook.OUTLINE}
            wide
          >
            OUTLINE
          </Button>
        </div></padded-stack>
      </Example>


    </Feed>
      
  );
}

export default ActionPage;
