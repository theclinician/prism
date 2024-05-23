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
  Feed,
  FeedHeader,
  FeedCard,
} from "@hakina/ui";
import { Example } from "$/blocks/example";

export const ActionPage = () => {
  
  return (
    <Feed>
      <FeedHeader>
        Buttons
      </FeedHeader>

      <Example
        code={`
          <el-button/>
        `}
      >
        <el-padded-stack><div>
          <el-button
            look={ButtonLook.GHOST}
          >
            GHOST
          </el-button>
          <el-button
            look={ButtonLook.FILL}
          >
            FILL
          </el-button>
          <el-button
            look={ButtonLook.FLAT}
          >
            FLAT
          </el-button>
          <el-button
            look={ButtonLook.OUTLINE}
          >
            OUTLINE
          </el-button>
        </div></el-padded-stack>
      </Example>

      <Example
        code={`
          <el-button disabled/>
        `}
      >
        <el-padded-stack>
          <el-button
            look={ButtonLook.GHOST}
            disabled
          >
            GHOST
          </el-button>
          <el-button
            look={ButtonLook.FILL}
            disabled
          >
            FILL
          </el-button>
          <el-button
            look={ButtonLook.FLAT}
            disabled
          >
            FLAT
          </el-button>
          <el-button
            look={ButtonLook.OUTLINE}
            disabled
          >
            OUTLINE
          </el-button>
        </el-padded-stack>
      </Example>

      <Example
        code={`
          <el-button wide/>
        `}
      >
        <el-padded-stack><div>
          <el-button
            look={ButtonLook.GHOST}
            wide
          >
            GHOST
          </el-button>
          <el-button
            look={ButtonLook.FILL}
            wide
          >
            FILL
          </el-button>
          <el-button
            look={ButtonLook.FLAT}
            wide
          >
            FLAT
          </el-button>
          <el-button
            look={ButtonLook.OUTLINE}
            wide
          >
            OUTLINE
          </el-button>
        </div></el-padded-stack>
      </Example>


    </Feed>
      
  );
}

export default ActionPage;
