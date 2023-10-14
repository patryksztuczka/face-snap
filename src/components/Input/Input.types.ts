export interface IInputProps {
  type: 'text' | 'password';
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
  error?: string;
}
