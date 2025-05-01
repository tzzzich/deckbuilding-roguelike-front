import { useAuthStore } from "@/store/auth";

export const MainPage = () => {
  const token = useAuthStore((s) => s.token);
  return (
    <>
      <h1>hi</h1>
      <p> as far as i can see you're {token}</p>
    </>
  );
};
