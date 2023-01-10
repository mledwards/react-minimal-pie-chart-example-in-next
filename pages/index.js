import { PieChart } from "react-minimal-pie-chart";

const Pie = () => (
  <PieChart
    // Using fixed dimensions, and the CSS for scaling

    // For some reason the pie didn't start north :shrug:
    startAngle={270}
    // Needing to show custom label to add other text in the segment
    label={({ x, y, dx, dy, dataEntry }) => {
      return (
        <text
          x={x}
          y={y}
          dx={dx}
          dy={dy}
          dominantBaseline="central"
          textAnchor="middle"
        >
          {dataEntry.title}
        </text>
      );
    }}
    // Pass the data to make up the pie
    data={[
      {
        title: "Red",
        value: 1,
        color: "red",
      },
      {
        title: "Yellow",
        value: 2,
        color: "yellow",
      },
      {
        title: "Blue",
        value: 1,
        color: "blue",
      },
    ]}
  />
);

export default Pie;
