import { Card } from "@radix-ui/themes";
import React from "react";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from "recharts";
interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
const IssueChart = ({ open, inProgress, closed }: Props) => {
  const data = [
    { label: "Open", value: open },
    { label: "In Progress", value: open },

    { label: "Open", value: open },
  ];
  return (
    <Card>
      <ResponsiveContainer width="100%" height="300">
        <BarChart data={}></BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
