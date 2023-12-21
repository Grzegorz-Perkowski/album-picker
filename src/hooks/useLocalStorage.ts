export const useLocalStorage = (key: string, initialValue: unknown) => {
  const getValue = () => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error(`Error reading from localStorage for key '${key}':`, error);
      return initialValue;
    }
  };

  const setValue = (value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing to localStorage for key '${key}':`, error);
    }
  };

  return { getValue, setValue };
};
