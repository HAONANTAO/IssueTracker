import React from "react";
interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
const IssueChart = ({ open, inProgress, closed }: Props) => {
  return <Card></Card>;
};

export default IssueChart;
