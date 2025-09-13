import{ useState, useEffect } from "react";
export function debounce(value: string, delay: number): string {
  const [debouncedValue, setDebouncedValue] = useState();

  useEffect(() => {
    const time = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(time);
  }, [value, delay]);

  return debouncedValue;
}
