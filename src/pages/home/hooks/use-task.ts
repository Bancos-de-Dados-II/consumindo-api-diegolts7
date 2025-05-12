import React from "react";

export const useTask = () => {
  const rotation = React.useMemo(() => Math.random() * 6 - 3, []);

  return {
    rotation,
  };
};
