export const DeviceSize = {
  Mobile_S: 320,
  Mobile_M: 480,
  Mobile_L: 600,
  Pad_S: 768,
  Pad_M: 992,
  Desktop_S: 1200,
};

export const ScreenBreakPoint = {
  MobileXS: `max-width: ${DeviceSize.Mobile_S}px`,
  MobileS: `min-width: ${DeviceSize.Mobile_S + 1}px`,
  MobileM: `min-width: ${DeviceSize.Mobile_M}px`,
  MobileL: `min-width: ${DeviceSize.Mobile_L}px`,
  PadS: `min-width: ${DeviceSize.Pad_S}px`,
  PadM: `min-width: ${DeviceSize.Pad_M}px`,
  Desktop: `min-width: ${DeviceSize.Desktop_S}px`,
};

