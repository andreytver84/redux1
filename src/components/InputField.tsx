import { IInputFieldProps } from "../model/types";

export const InputField = ({
  text,
  handleText,
  handleSubmit,
}: IInputFieldProps) => {
  return (
    <>
      <label>
        <input
          value={text}
          onChange={(e) => {
            handleText(e.target.value);
          }}
        />
      </label>
      <button onClick={handleSubmit}>Add todo</button>
    </>
  );
};
