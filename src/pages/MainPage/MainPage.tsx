import { useStartQuest } from "features/start-quest/model/useStartQuest";
import { Box, Heading, Button } from "grommet";
import { Play } from "grommet-icons";

export const MainPage = () => {
  const token = localStorage.getItem("token");
  const { start, loading } = useStartQuest();
  return (
    <>
      <h1>hi</h1>
      <p> as far as i can see you're {token}</p>
      <Box fill background="background-back" align="center" justify="center">
      <Heading margin={{ bottom: "medium" }}>Slay-The-Spire TG</Heading>

      <Button
        primary
        icon={<Play />}
        label="Новый квест"
        onClick={() => start("RED")}
        disabled={loading}
      />
    </Box>
    </>
  );
};
