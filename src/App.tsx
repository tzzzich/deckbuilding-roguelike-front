import { Routes, Route } from "react-router-dom";

import { Root } from "@/pages/Root";
import { PrivateRoute } from "@/pages/PrivateRoute";
import { MainPage } from "@/pages/MainPage";
import { LoginPage } from "@/pages/LoginPage";
import { ROUTES } from "@/constants/router";
import { QuestLocationPage } from "./pages/QuestLocationPage/QuestLocationPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Root />}>
        <Route element={<PrivateRoute />}>
          <Route index element={<MainPage />} />
          <Route path={ROUTES.QUEST_LOCATION} element={<QuestLocationPage />} />
        </Route>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
