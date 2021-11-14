
export const getModifiedEvent = (event: any, name: any, value: any) => {
  return {
    ...event,
    target: {
      ...event.target,
      name,
      value,
    },
  };
};

export const thousandSpread = (int: number) => {
  const divided = int / 1000;
  return `${divided},000`;
};