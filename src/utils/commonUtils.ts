
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
