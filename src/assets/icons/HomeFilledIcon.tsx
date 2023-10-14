import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeFilledIcon = () => {
  return (
    <Svg width={25} height={24} fill="none">
      <Path
        d="M6.875 21c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 014.875 19v-9a1.986 1.986 0 01.8-1.6l6-4.5a2.11 2.11 0 01.575-.3c.2-.067.408-.1.625-.1.217 0 .425.033.625.1s.392.167.575.3l6 4.5a1.985 1.985 0 01.8 1.6v9c0 .55-.196 1.02-.587 1.413a1.926 1.926 0 01-1.413.587h-4v-7h-4v7h-4z"
        fill="#000"
      />
    </Svg>
  );
};

export default HomeFilledIcon;
