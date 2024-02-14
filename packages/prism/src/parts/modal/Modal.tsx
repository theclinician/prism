import { JSX, children as useChildren } from "solid-js";
import style from "./Modal.module.scss";
import useProps from "$/utils/useProps";
import { Portal } from "solid-js/web";
import Mobile from "../layout/Mobile";


type Props = {
  children?: JSX.Element,
  onClose?: null | (() => void),
}

const defaultProps: Required<Props> = {
  children: null,
  onClose: null,
}

const Modal = (allProps: Props & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);
  const c = useChildren(() => props.children);
  let overlayRef: HTMLDivElement | undefined;

  const handleClickOutside = (e: MouseEvent) => {
    props.onClose && props.onClose();
  }

  return (
    <Portal>
      <div
        classList={{
          [style.overlay]: true,
        }}
        onClick={handleClickOutside}
        ref={overlayRef}
      >
        <div
          classList={{
            [style.modal]: true,
          }}
          {...other}
        >
          {c()}
        </div>
      </div>
    </Portal>
  );
}

export default Modal;
