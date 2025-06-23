import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Box } from "grommet";
import { useParams } from "react-router-dom";
import { LocationGraph } from "entities/Location/ui/LocationGraph";
import { LocationDetailed } from "entities/Quest";
import { getQuestLocation } from "entities/Quest/api/questApi";
import { useQuestStore } from "entities/Quest/model/questStore";
import { useRoomNavigation } from "features/room-navigation/model/useRoomNavigation";
import { ConfirmEnterModal } from "features/room-navigation/ui/ConfirmEnterModal";

export const QuestLocationPage = () => {
  const { questId, locationId } = useParams<{
    questId: string;
    locationId: string;
  }>();

  const viewLocation = useQuestStore((s) => s.viewLocation);
  const setViewLocation = useQuestStore((s) => s.setViewLocation);
  

  console.log(viewLocation);

  const skipQuery = viewLocation && viewLocation.id === locationId;

  const { data, error, isPending } = useQuery<LocationDetailed, Error>({
    queryKey: ["quest-location", questId, locationId],
    queryFn: () => getQuestLocation(locationId!),
    enabled: !skipQuery,
  });

  useEffect(() => {
    if (data) setViewLocation(data);
  }, [data, setViewLocation]);

  const location = skipQuery ? viewLocation! : data!;

  const { handleRoomClick, modal } =
  useRoomNavigation(locationId!, location?.currentRoom?.id ?? null);

  if (error) return null;
  if (isPending && !skipQuery) return null;

return (
  <>
    <Box pad="medium" fill align="center" overflow="auto">
      <LocationGraph
        rooms={location.rooms}
        edges={location.edges}
        currentRoomId={location?.currentRoom?.id ?? null}
        onRoomClick={handleRoomClick}
      />
    </Box>

    <ConfirmEnterModal {...modal} />
  </>
);
};
