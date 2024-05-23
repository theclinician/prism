import { JSX, createEffect, children as useChildren } from "solid-js";
import style from "./Feed.module.scss";
import useProps from "$/utils/useProps";


export type FeedHeaderProps = {
  children?: JSX.Element,
  // name?: string | null,
}

const defaultProps: Required<FeedHeaderProps> = {
  children: null,
  // name: null,
}

export const FeedHeader = (allProps: FeedHeaderProps & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);
  const c = useChildren(() => props.children);

  

  // createEffect(() => {
  //   if(props.name) {
  //     console.log("ADD EVENT LISTENER");
  //     let listener = window.addEventListener("hashchange", (event) => {
  //       console.log("HASHCHANGE", event);
  //     });
  //     console.log("ADDED: ", listener);
  //   }
  // })

  return (
    <div
      classList={{
        [style.header]: true,
      }}
      {...other}
    >
      {c()} 
    </div>
  );
}

export default FeedHeader;

/*
{props.name ? (
        <a name={props.name}>
          {c()}
        </a>
      ) : (
        c()
      )}
*/