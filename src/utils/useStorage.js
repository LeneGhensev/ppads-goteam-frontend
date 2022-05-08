import { useCallback, useState } from "react";
import storage from "./storage";

export default function useStorage(key) {
  console.log(key);
  const [state, setState] = useState(() => storage.get(key));
  console.log(state);

  const set = useCallback(
    (newValue) => {
      storage.set(key, newValue);
      setState(newValue);
    },
    [key]
  );

  const remove = useCallback(() => {
    storage.remove(key);
    setState(undefined);
  }, [key]);

  return [state, set, remove];
}
