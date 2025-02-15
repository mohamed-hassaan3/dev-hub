export {};

declare global {
  type ButtonProps = {
    children: React.ReactNode;
    size: small | medium | large;
    color: primary | secondary;
    onClick?: () => void;
    disable?: boolean 
    className?: string
    type?: string
  };
}
