import { FunctionComponent, JSX } from "preact";

type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
};

const CustomButton: FunctionComponent<ButtonProps> = (props) => {
  const { variant, children, ...rest } = props;
  return (
    <button class={`button button--${variant}`} {...rest}>
      {children}
    </button>
  );
};
