import { styled } from "styled-components";
import { Control, FieldError, useController } from "react-hook-form";

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SLabel = styled.div`
  color: ${({ theme }) => theme.COLOR.GRAY_200};
`;

const SInput = styled.input`
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.XL};
  border: 1px solid #3f305e;
  background: #190c35;
  height: 2.5rem;
  transition: ${({ theme }) => theme.TRANSITION.MEDIUM_SMOOTH};
  padding: 0 1rem;
  color: ${({ theme }) => theme.COLOR.WHITE};

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.COLOR.PRIMARY_300};
  }
`;

const SError = styled.div`
  color: ${({ theme }) => theme.COLOR.ERROR_300};
  font-size: ${({ theme }) => theme.FONT.SIZE.SM};
`;

type InputAttrs = Pick<
  HTMLInputElement,
  "disabled" | "max" | "maxLength" | "min" | "placeholder" | "type"
>;

type Props = Partial<InputAttrs> & {
  label: string;
  control: Control<any>;
  error?: FieldError;
  name: string;
  capture?: boolean | "user" | "environment";
};

export const Input = ({
  label,
  name,
  control,
  error,
  capture,
  ...props
}: Props) => {
  const { field } = useController({
    name,
    control,
  });
  const { value, onChange } = field;

  return (
    <SContainer>
      <SLabel>{label}</SLabel>
      <SInput value={value} onChange={onChange} {...props} capture={capture} />
      {error && <SError>*{error?.message}</SError>}
    </SContainer>
  );
};
