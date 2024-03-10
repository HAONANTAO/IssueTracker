import React from "react";
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
