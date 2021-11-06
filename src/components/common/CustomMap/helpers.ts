import React from 'react';

const { LatLng, Map, Marker } = window.naver.maps;


export const generateMap = (lat: number, long: number) => {
  const position = new LatLng(lat, long);
  const map = new Map('map', { center: position, zoom: 15 });

  return map;
};

export const generateMarker = (map: any, lat: number, long: number) => {
  const position = new LatLng(lat, long);
  return new Marker({ position, map });
};
