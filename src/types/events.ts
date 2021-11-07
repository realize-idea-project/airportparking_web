import React, { MouseEvent } from 'react';

export type ClickEvent<T> = MouseEvent<T, MouseEvent>;
export type ChangeEvent<T> = React.ChangeEvent<T>;