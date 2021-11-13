export const DeviceSize = {
  Mobile_XS: 200,
  Mobile_S: 320,
  Mobile_M: 480,
  Mobile_L: 600,
  Pad_S: 768,
  Pad_M: 992,
  Desktop_S: 1200,
};

export const ScreenBreakPoint = {
  MobileXXS: `max-width: ${DeviceSize.Mobile_XS}px`,
  MobileXS: `min-width: ${DeviceSize.Mobile_XS + 1}px`,
  MobileS: `min-width: ${DeviceSize.Mobile_S}px`,
  MobileM: `min-width: ${DeviceSize.Mobile_M}px`,
  MobileL: `min-width: ${DeviceSize.Mobile_L}px`,
  PadS: `min-width: ${DeviceSize.Pad_S}px`,
  PadM: `min-width: ${DeviceSize.Pad_M}px`,
  Desktop: `min-width: ${DeviceSize.Desktop_S}px`,
};

export const HeaderHeight = {
  mobileXXS: '30px',
  mobileXS: '50px',
  mobileS: '60px',
  mobileM: '65px',
  mobileL: '70px',
  padS: '100px',
  desktop: '100px',
}
