import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <>
     if (status === "OPEN") {
    return <Badge color="orange">{status}</Badge>;
  } else if (status === "IN_PROGRESS") {
    return <Badge color="blue">{status}</Badge>;
  } else if (status === "CLOSED") {
    return <Badge color="green">{status}</Badge>;
  } else {
    // 如果 status 不是 "OPEN", "IN_PROGRESS" 或 "CLOSED"
    return null; // 或者你可以返回一个默认状态的 Badge，取决于你的需求
  }
    </>
  );
};

export default StatusBadge;
