import { Card } from "@radix-ui/themes";
import React from "react";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from "recharts";
interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
const IssueChart = ({ open, inProgress, closed }: Props) => {
  return (
    <Card>
      <ResponsiveContainer width="100%" height="300">
        <Bar
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
