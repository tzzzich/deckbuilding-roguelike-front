import { useMutation, useQueryClient } from "@tanstack/react-query";
import { enterRoom } from "entities/Location/api/locationApi";

export const useEnterRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      locationId,
      roomId,
    }: {
      locationId: string;
      roomId: string;
    }) => enterRoom(locationId, roomId),

    onSuccess: (_void, vars) => {
      queryClient.invalidateQueries({
        queryKey: ["quest-location", vars.locationId, vars.roomId],
      });
    },
  });
};
