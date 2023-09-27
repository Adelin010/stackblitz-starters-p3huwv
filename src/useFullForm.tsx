import { ReactElement, useState } from 'react';

export function useFullForm(forms: ReactElement[]) {
  const [curr_idx, setCurrIdx] = useState(0);

  function next() {
    if (curr_idx >= forms.length - 1) setCurrIdx(0);
    else setCurrIdx(curr_idx + 1);
  }
  function back() {
    if (curr_idx === forms.length - 1) {
      setCurrIdx(0);
      return;
    }
    goTo(curr_idx - 1);
  }
  function goTo(index: number) {
    setCurrIdx(index);
  }

  return {
    currentIndex: curr_idx,
    Form: forms[curr_idx],
    forms,
    next,
    back,
    goTo,
    firstStep: curr_idx === 0 ? true : false,
    lastStep: curr_idx === forms.length - 1,
  };
}
