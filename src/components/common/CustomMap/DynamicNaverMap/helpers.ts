import React from 'react';

const { LatLng, Map, Marker, Event } = window.naver.maps;


export const generateMap = (lat: number, long: number) => {
  const position = new LatLng(lat, long);
  const map = new Map('map', { center: position, zoom: 15 });

  return map;
};

export const generateMarker = (map: any, lat: number, long: number) => {
  const position = new LatLng(lat, long);
  const marker = new Marker({ position, map });
  
  return marker;
};
