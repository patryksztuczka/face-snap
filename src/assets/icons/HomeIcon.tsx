import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = () => {
  return (
    <Svg width={25} height={24} fill="none">
      <Path
        d="M6.875 19h3v-6h6v6h3v-9l-6-4.5-6 4.5v9zm0 2c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 014.875 19v-9a1.986 1.986 0 01.8-1.6l6-4.5a2.11 2.11 0 01.575-.3c.2-.067.408-.1.625-.1.217 0 .425.033.625.1s.392.167.575.3l6 4.5a1.985 1.985 0 01.8 1.6v9c0 .55-.196 1.02-.587 1.413a1.926 1.926 0 01-1.413.587h-5v-6h-2v6h-5z"
        fill="#778088"
      />
    </Svg>
  );
};

export default HomeIcon;
