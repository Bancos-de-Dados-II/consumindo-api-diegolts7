import { Exception } from "./Exceptions";
import { InternalException } from "./ExceptionCodes";
import type { JSX } from "react";

export function ExceptionCatcher({ children }: any): JSX.Element {
  try {
    return children;
  } catch (error: unknown) {
    if (error instanceof Exception) {
      return (
        <>
          {error.alert()}
          {children}
        </>
      );
    }

    const exception = new InternalException(error as Error);
    return (
      <>
        {exception.alert()}
        {children}
      </>
    );
  }
}
