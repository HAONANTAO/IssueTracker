import { Card } from "@radix-ui/themes";
import React from "react";
import { ResponsiveContainer, barchart } from "recharts";
interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
const IssueChart = ({ open, inProgress, closed }: Props) => {
  return (
    <Card>
      <ResponsiveContainer></ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
