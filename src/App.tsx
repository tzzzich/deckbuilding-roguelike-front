import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTelegramInit } from "@/hooks/useTelegramInit";

import { Root } from "@/pages/Root";
import { PrivateRoute } from "@/pages/PrivateRoute";
import { MainPage } from "@/pages/MainPage";
import { LoginPage } from "@/pages/LoginPage";

export default function App() {
  const { mutate } = useTelegramInit();

  useEffect(() => {
    mutate();
  }, []);

  return (
    <Routes>
      <Route element={<Root />}>
        <Route element={<PrivateRoute />}>
          <Route index element={<MainPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
