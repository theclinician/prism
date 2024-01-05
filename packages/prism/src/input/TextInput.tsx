import { JSX, batch, createEffect, createSignal } from "solid-js";
import style from "./Input.module.scss";
import useProps from "$/utils/useProps";


type Props = {
  name: string,
  hasError?: boolean,
  // validate?: undefined | null | ((value: string) => boolean | string),
  untouchOn?: boolean,
  onBlur?: null | ((e: Event) => void),
  onKeyDown?: null | ((e: KeyboardEvent) => void),
  onReturn?: null | ((e: KeyboardEvent) => void),
}

const defaultProps: Required<Props> = {
  name: "",
  hasError: false,
  // validate: null,
  untouchOn: false,
  onBlur: null,
  onKeyDown: null,
  onReturn: null,
}

const TextInput = (allProps: Props & JSX.IntrinsicElements['input']) => {
  const [props, other] = useProps(allProps, defaultProps);
  const [touched, setTouched] = createSignal(false);
  
  createEffect(() => {
    if(props.untouchOn) {
      setTouched(false);
    }
  })

  const handleBlur = (e: Event) => {
    setTouched(true);
    if(props.onBlur) {
      props.onBlur(e)
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
    <input
      type="text"
      name={props.name}
      classList={{
        [style.input]: true,
        [style.textInput]: true,
        [style.hasError]: touched() && props.hasError,
      }}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      {...other}
    />
  );
}

export default TextInput;
