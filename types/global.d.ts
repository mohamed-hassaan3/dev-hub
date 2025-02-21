export {};

declare global {
  type ButtonProps = {
    children: React.ReactNode;
    size?: small | medium | large;
    color?: primary | secondary;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: "reset" | "button" | "submit" | undefined;
  };
}
