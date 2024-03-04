import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <>
      {if(status==="OPEN")
      return <Badge color="orange">{status}</Badge>}
     
    </>
  );
};

export default StatusBadge;
