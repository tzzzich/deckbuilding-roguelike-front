import { useState} from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { roomTypeToRoute } from "@/constants/router";
import { Room } from "entities/Quest";
import { getRoomContent } from "entities/Room/api/roomApi";
import { useEnterRoom } from "./useEnterRoom";


export const useRoomNavigation = (
  locationId: string,
  currentRoomId: string | null,
) => {
  const navigate = useNavigate();
  const [pendingRoom, setPendingRoom] = useState<Room | null>(null);

  const roomContent = useMutation({
    mutationFn: getRoomContent,
    onSuccess: (data) =>
      navigate(roomTypeToRoute[data.type].replace(":id", data.id)),
  });

  const enterRoom = useEnterRoom();

  const handleRoomClick = (room: Room) => {
    if (room.status === "CURRENT") {
      roomContent.mutate(room.id);
    } else if (room.status === "POTENTIAL" && !currentRoomId) {
      setPendingRoom(room);
    }
  };

  const confirmEnter = () => {
    if (!pendingRoom) return;
    enterRoom.mutate(
      { locationId, roomId: pendingRoom.id },
      {
        onSuccess: () => roomContent.mutate(pendingRoom.id),
      },
    );
    setPendingRoom(null);
  };

  return {
    handleRoomClick,
    modal: {
      open: !!pendingRoom,
      onCancel: () => setPendingRoom(null),
      onConfirm: confirmEnter,
    },
  };
};
