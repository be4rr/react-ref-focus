import {
  createRef,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";

export interface ChildHandle {
  hello: () => void;
  focus: (index: number) => void;
}

const Child = forwardRef<ChildHandle, {}>((props, ref) => {
  useImperativeHandle(ref, () => ({
    hello: () => {
      console.log("hello world");
    },
    focus: (index: number) => {
      refs[index].current?.focus();
    },
  }));

  const [values, setValues] = useState(["", "", "", ""]);
  const refs = useMemo(
    () => values.map(() => createRef<HTMLInputElement>()),
    []
  );
  return (
    <>
      {values.map((value, index) => (
        <input
          key={index}
          value={value}
          onChange={(e) => {
            const tmp = [...values];
            tmp[index] = e.target.value;
            setValues(tmp);
          }}
          ref={refs[index]}
        />
      ))}
    </>
  );
});

export default Child;
