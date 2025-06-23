import { useTelegramInit } from "features/auth/model/useTelegramInit";
import { Spinner } from "grommet";
import { useState, useEffect } from "react";

export const LoginPage = () => {
  const { mutateAsync } = useTelegramInit();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await mutateAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setAuthChecked(true);
      }
    })();
  }, [mutateAsync]);

  if (!authChecked) return <Spinner fill />;
  return <h1>here you can see a login page example</h1>;
};
