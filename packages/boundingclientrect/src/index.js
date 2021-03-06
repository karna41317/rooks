import { useState, useEffect } from "react";
import useMutationObserver from "@rooks/use-mutation-observer";

export default function(ref) {
  function getBoundingClientRect() {
    if (ref.current) {
      return ref.current.getBoundingClientRect();
    }
    return null;
  }

  const [value, setValue] = useState(null);

  function update() {
    setValue(getBoundingClientRect());
  }

  useEffect(
    () => {
      update();
    },
    [ref.current]
  );

  useMutationObserver(ref, update);

  return value;
}
