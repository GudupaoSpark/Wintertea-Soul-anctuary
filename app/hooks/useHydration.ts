"use client";
import { useState, useEffect } from 'react';

/**
 * A custom hook to determine if the component has been hydrated (mounted on the client).
 * This is useful to prevent hydration mismatch errors when server and client render different initial UI.
 * @returns {boolean} `true` if the component is hydrated, otherwise `false`.
 */
export const useHydration = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
};