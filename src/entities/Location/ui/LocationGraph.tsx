import { Room, RoomEdge } from "entities/Quest";
import { Box, Grid, Stack, Diagram } from "grommet";
import { iconMap } from "./icons";

const CELL = "80px";
const GAP = "medium";

type Props = {
  rooms: Room[];
  edges: RoomEdge[];
  currentRoomId?: string | null;
  onRoomClick?: (room: Room) => void;
};

export const LocationGraph = ({
  rooms,
  edges,
  currentRoomId,
  onRoomClick,
}: Props) => {
  const maxStep = Math.max(...rooms.map((r) => r.step));
  const maxLine = Math.max(...rooms.map((r) => r.line));

  const rows = Array.from({ length: maxStep + 1 }, () => CELL);
  const columns = Array.from({ length: maxLine + 1 }, () => CELL);

  const connections = edges.map((e) => ({
    fromTarget: `room-${e.fromId}`,
    toTarget: `room-${e.toId}`,
    anchor: "center" as const,
    type: "direct" as const,
    thickness: "xsmall",
    color: "light-4",
  }));

  return (
    <Stack guidingChild="last" interactiveChild="last">
      <Diagram connections={connections} />
      <Grid
        rows={rows}
        columns={columns}
        gap={GAP}
        justify="center"
        align="center"
      >
        {rooms.map((room) => {
          const Icon = iconMap[room.type];
          const clickable =
            room.status === "CURRENT" ||
            (room.status === "POTENTIAL" && !currentRoomId);
          return (
            <Box
              key={room.id}
              id={`room-${room.id}`}
              style={{
                gridRowStart: room.step + 1,
                gridColumnStart: room.line + 1,
                cursor: clickable ? "pointer" : "default",
              }}
              width={CELL}
              height={CELL}
              round="full"
              background={
                room.id === currentRoomId
                  ? "accent-1"
                  : room.status === "POTENTIAL"
                  ? "accent-3"
                  : "dark-3"
              }
              border={{ color: "light-4", size: "2px" }}
              align="center"
              justify="center"
              elevation="small"
              onClick={() => clickable && onRoomClick?.(room)}
            >
              <Icon size="24px" />
            </Box>
          );
        })}
      </Grid>
    </Stack>
  );
};
