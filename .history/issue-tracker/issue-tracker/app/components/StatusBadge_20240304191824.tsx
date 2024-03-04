import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

const StatusBadge = ({ status }: { status: Status }) => {
  const statusColorMap: Record<Status, string:> = {
    OPEN: "orange",
    IN_PROGRESS: "blue",
    CLOSED: "green",
  };

  const color = statusColorMap[status];

  return color ? <Badge color={color}>{status}</Badge> : null;
};

export default StatusBadge;
