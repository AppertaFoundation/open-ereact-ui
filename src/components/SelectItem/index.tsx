import React from 'react';

type Props = { children?: string; value: string; key?: string };

export type Ref = HTMLOptionElement;

const SelectItem = React.forwardRef<Ref, Props>((props, ref) => (
  <option ref={ref} {...props} />
));

export default SelectItem;
