import React from "react";
import { ResponsiveContainer } from "recharts";
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
