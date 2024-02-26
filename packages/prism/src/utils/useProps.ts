import { splitProps, mergeProps } from "solid-js";

export const useProps = <Props>(
  allProps: Props,
  defaultProps: Required<Props>,
) => 
  splitProps(
    mergeProps(defaultProps, allProps),
    Object.keys(defaultProps) as (keyof Props)[],
  );

export default useProps;

