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
import { Example } from "$/blocks/example";

export const ButtonPage = () => {
  const handleClick = async () => {
    // showDropdown(true);
  }

  return (
    <Card>
      <el-padded-stack>
        <Example
          code={`
            <el-button
              look={ButtonLook.FILL}
              color={Color.PRIMARY}
              onClick={handleClick}
            >
              el-button
            </el-button>
          `}
        >
          <el-button
            look={ButtonLook.FILL}
            color={Color.PRIMARY}
            onClick={handleClick}
          >
            Fill
          </el-button>
        </Example>
        <el-button
          look={ButtonLook.FILL}
          color={Color.PRIMARY}
          disabled
        >
          Disabled
        </el-button>
      </el-padded-stack>
      <el-padded-stack>
        <el-button
          look={ButtonLook.GHOST}
          color={Color.PRIMARY}
        >
          Ghost
        </el-button>
        <el-button
          look={ButtonLook.GHOST}
          color={Color.PRIMARY}
          disabled
        >
          Disabled
        </el-button>
      </el-padded-stack>
      <el-padded-stack>
        <el-button
          look={ButtonLook.OUTLINE}
          color={Color.PRIMARY}
        >
          Outline
        </el-button>
        <el-button
          look={ButtonLook.OUTLINE}
          color={Color.NEUTRAL}
        >
          Neutral
        </el-button>
        <el-button
          look={ButtonLook.OUTLINE}
          color={Color.ERROR}
        >
          Error
        </el-button>
      </el-padded-stack>
    </Card>
  );
}

export default ButtonPage;
