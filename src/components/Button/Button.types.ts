export interface IButtonProps {
  text: string;
  onPress: () => void;
  icon?: () => JSX.Element;
  secondary?: boolean;
  disabled?: boolean;
}
