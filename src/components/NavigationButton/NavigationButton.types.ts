export interface INavigationButtonProps {
  navigationOption: INavigationOption;
  isActive: boolean;
}

export interface INavigationOption {
  label: string;
  path: string;
  icon: () => JSX.Element;
  activeIcon: () => JSX.Element;
}
