import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DownloadIcon = () => {
  return (
    <Svg width={25} height={24} fill="none">
      <Path
        d="M12.5 15.575c-.133 0-.258-.02-.375-.063a.877.877 0 01-.325-.212l-3.6-3.6a.916.916 0 01-.287-.7 1.02 1.02 0 011-1.012.93.93 0 01.712.287L11.5 12.15V5c0-.283.096-.52.287-.713A.968.968 0 0112.5 4c.283 0 .52.096.713.287.191.192.287.43.287.713v7.15l1.875-1.875a.93.93 0 01.712-.287c.276.008.513.112.713.312.183.2.28.433.287.7a.916.916 0 01-.287.7l-3.6 3.6c-.1.1-.208.17-.325.212a1.106 1.106 0 01-.375.063zM6.5 20c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 014.5 18v-2c0-.283.096-.52.287-.713A.967.967 0 015.5 15c.283 0 .52.096.713.287.191.192.287.43.287.713v2h12v-2c0-.283.096-.52.288-.713A.968.968 0 0119.5 15c.283 0 .52.096.712.287.192.192.288.43.288.713v2c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0118.5 20h-12z"
        fill="#000"
      />
    </Svg>
  );
};

export default DownloadIcon;
