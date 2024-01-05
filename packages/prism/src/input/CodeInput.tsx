import { JSX, createMemo } from "solid-js";
import style from "./CodeInput.module.scss";
import useProps from "$/utils/useProps";


type Props = {
  count?: number,
  name: string,
  onChange?: null | ((_: string) => void),
  onSubmit?: null | ((_: string) => void),
  onError?: null | ((_: string) => void),
}

const defaultProps: Required<Props> = {
  count: 4,
  name: "",
  onChange: null,
  onSubmit: null,
  onError: null,
}

const ignoredKeys = ["Tab", "Escape"];

const CodeInput = (allProps: Props & JSX.IntrinsicElements['div']) => {
  const [props, other] = useProps(allProps, defaultProps);

  const range = createMemo(() => new Array(props.count).fill(0).map((_, i) => i));
  const inputs = new Array(props.count).fill(null);

  const handleChange = () => {
    if(props.onChange) {
      const code = inputs.map(input => input.value).join("");
      props.onChange(code);
    }
  }

  const handleSumbit = () => {
    const code = inputs.map(input => input.value).join("");
    if( /^\d+$/.test(code) && code.length === props.count ) {
      props.onSubmit?.(code);
    } else {
      props.onError?.(code);
    }
  }

  const focusAt = (at: number) => {
    inputs[at]?.focus();
    inputs[at]?.select();
  }

  const handleKeyUp = (index: number, evt: KeyboardEvent) => {
    if(ignoredKeys.includes(evt.key)) {
      return;
    }
    evt.stopPropagation();

    if(evt.key === "ArrowRight") {
      focusAt(index + 1);
      return;
    }
    if(evt.key === "ArrowLeft") {
      focusAt(index - 1);
      return;
    }
    if(evt.key === "Enter") {
      handleSumbit();
      return;
    }

    // Usually, we want to move to the next field.
    //   However, if the user pressed a few buttons rapidly,
    //   we may need to move a bit further.
    const length = inputs[index].value.length;
    const next = length > 1 ? index + length : index + 1;
    const code = inputs.map(input => input.value).join("").replace(/\D/g, "");

    // Redistribute the value among inputs, in case
    //   multiple digits were combined in a single event.
    //   For example when the code was pasted.
    for(let i in inputs) {
      inputs[i].value = code[i] ?? "";
    }
    if(inputs[index].value.length > 0) {
      focusAt(next);
    }
    handleChange();
  }

  const handleKeyDown = (index: number, evt: KeyboardEvent) => {
    if(evt.key === "Backspace") {
      // Clear next digits to avoid confusing behavior.
      for(let i = index + 1; i < inputs.length; i++) {
        inputs[i].value = "";
      }
      if(inputs[index].value.length > 0) {
        inputs[index].value = "";
        handleChange();
        return;
      }
      const prev = (index - 1) >= 0 ? index - 1 : 0;
      inputs[prev].focus();
      inputs[prev].value = "";
      handleChange();
      return;
    }
  }

  const handleClick = (index: number) => {
    // If the input is filled in and the user wants
    //   to correct a digit, focus on the clicked digit.
    if(inputs[index]?.value.length > 0) {
      inputs[index]?.focus();
      inputs[index]?.select();
      return;
    }
    // Otherwise, focus on the first empty input.
    for(let i = 0; i < props.count; i++) {
      if(inputs[i]?.value.length === 0) {
        inputs[i].focus();
        inputs[i].select();
        return;
      }
    }
    // Safeguard.
    inputs[index]?.focus();
    inputs[index]?.select();
  }

  return (
    <div
      classList={{
        [style.codeInput]: true,
      }}
      {...other}
    >
      {range().map(i => (
        <>
          <input
            ref={inputs[i]}
            name={`${props.name}--${i}`}
            type="text"
            onClick={[handleClick, i]}
            onKeyDown={[handleKeyDown, i]}
            onKeyUp={[handleKeyUp, i]}
            tabIndex={i === 0 ? 0 : -1}
            classList={{
              [style.input]: true,
            }}
          />
        </>
      ))}
    </div>
  );
}

export default CodeInput;
