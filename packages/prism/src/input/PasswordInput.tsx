import { JSX, batch, createEffect, createSignal } from "solid-js";
import style from "./Input.module.scss";
import useProps from "$/utils/useProps";
import { Icon, I, IconSize } from "$/static/icon/Icon";

type Props = {
  name: string,
  hasError?: boolean,
  untouchOn?: boolean,
  onBlur?: undefined | null | ((e: Event) => void),
  onKeyDown?: null | ((e: KeyboardEvent) => void),
  onReturn?: null | ((e: KeyboardEvent) => void),
}

const defaultProps: Required<Props> = {
  name: "",
  hasError: false,
  untouchOn: false,
  onBlur: null,
  onKeyDown: null,
  onReturn: null,
}

const PasswordInput = (allProps: Props & JSX.IntrinsicElements['input']) => {
  const [props, other] = useProps(allProps, defaultProps);
  const [visible, setVisible] = createSignal(false);
  const [touched, setTouched] = createSignal(false);

  createEffect(() => {
    if(props.untouchOn) {
      batch(() => {
        setVisible(false);
        setTouched(false);
      });
    }
  })

  const handleToggle = () => {
    batch(() => {
      setVisible(v => !v);
      setTouched(false);
    });
  }

  const handleBlur = (e: Event) => {
    setTouched(true);
    if(props.onBlur) {
      props.onBlur(e);
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if(props.onKeyDown) {
      props.onKeyDown(e)
    }
    if(props.onReturn && e.key === "Enter") {
      props.onReturn(e)
    }
  }

  return (
    <div class={style.wrap}>
      <input
        type={visible() ? "text" : "password"}
        name={props.name}
        classList={{
          [style.input]: true,
          [style.passwordInput]: true,
          [style.hasError]: touched() && props.hasError,
        }}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        {...other}
      />
      <div
        class={style.button}
        onClick={handleToggle}
      >
        <Icon
          icon={visible() ? I["eye-closed"] : I["eye-open"]}
          size={IconSize.SMALL}
        />
      </div>
    </div>
  );
}

export default PasswordInput;
