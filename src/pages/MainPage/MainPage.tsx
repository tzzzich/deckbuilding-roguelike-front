export const MainPage = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      <h1>hi</h1>
      <p> as far as i can see you're {token}</p>
    </>
  );
};
