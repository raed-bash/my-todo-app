import React, { useEffect, useState } from "react";
export default function useUpdatedEffect(
  callback: React.EffectCallback,
  DependencyList?: React.DependencyList | undefined
) {
  const [bol, setBol] = useState(false);
  useEffect(() => {
    if (bol) {
      callback();
    } else {
      setBol(true);
    }
    return;
    // eslint-disable-next-line
  }, DependencyList);
}
