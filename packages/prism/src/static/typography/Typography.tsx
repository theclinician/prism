import { JSX, splitProps, children as useChildren } from "solid-js";
import style from "./Typography.module.scss";

export const Heading2 = (allProps: {
  children: JSX.Element,
}) => {
  const [props, other] = splitProps(allProps, [
    "children",
  ]);

  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        [style.heading2]: true,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export const Heading3 = (allProps: {
  children: JSX.Element,
}) => {
  const [props, other] = splitProps(allProps, [
    "children",
  ]);

  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        [style.heading3]: true,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export const SubHeading = () => {}


export const MetaText = () => {}


export const Paragraph = (allProps: {
  children: JSX.Element,
}) => {
  const [props, other] = splitProps(allProps, [
    "children",
  ]);

  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        [style.paragraph]: true,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export const Caption = (allProps: {
  children: JSX.Element,
}) => {
  const [props, other] = splitProps(allProps, [
    "children",
  ]);

  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        [style.caption]: true,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}




export const Centered = (allProps: {
  children?: JSX.Element,
}) => {
  const [props, other] = splitProps(allProps, [
    "children",
  ]);

  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        [style.centered]: true,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export const SecondaryText = (allProps: {
  children: JSX.Element,
}) => {
  const [props, other] = splitProps(allProps, [
    "children",
  ]);

  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        [style.secondaryText]: true,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export const BrandText = (allProps: {
  children: JSX.Element,
}) => {
  const [props, other] = splitProps(allProps, [
    "children",
  ]);

  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        [style.brandText]: true,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}

export const ErrorText = (allProps: {
  children: JSX.Element,
}) => {
  const [props, other] = splitProps(allProps, [
    "children",
  ]);

  const c = useChildren(() => props.children);
  return (
    <div
      classList={{
        [style.errorText]: true,
      }}
      {...other}
    >
      {c()}
    </div>
  );
}
