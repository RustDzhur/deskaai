import {useRef, useEffect} from 'react';

export function useEventListener(
  eventName: any,
  handler: any,
  element = window
) {
  // https://usehooks.com/useEventListener/

  const savedHandler = useRef();

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(
    () => {
      // Make sure element supports addEventListener
      const isSupported = element && element.addEventListener;
      let cleanUpFunc = () => {};
      if (!!isSupported) {
        // Create event listener that calls handler function stored in ref
        const eventListener = (event: any) =>
          (savedHandler as any)?.current(event);
        // Add event listener
        element.addEventListener(eventName, eventListener);
        // Remove event listener on cleanup
        cleanUpFunc = () =>
          element.removeEventListener(eventName, eventListener);
      }
      return cleanUpFunc;
    },
    [eventName, element] // Re-run if eventName or element changes
  );
}
