import Svg, { Path } from 'react-native-svg';

const UncheckedCheckboxIcon = () => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M5 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 013 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 015 3h14c.55 0 1.02.196 1.413.587C20.803 3.98 21 4.45 21 5v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0119 21H5zm0-2h14V5H5v14z"
        fill="#778088"
      />
    </Svg>
  );
};

export default UncheckedCheckboxIcon;
