import { Badge } from "@radix-ui/themes";
import React from "react";



const StatusBadge = ({status}:{status:Status}) => {

  
  return (
    <>
      <Badge color="orange">In progress</Badge>
    </>
  );
};

export default StatusBadge;
