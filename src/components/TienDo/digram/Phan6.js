import React from "react";
import { useMeasure } from "react-use";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { useRechartToPng } from "recharts-to-png";
// import "./styles.css";

export const Phan6 = () => {
  const [containerRef, { width: containerWidth }] = useMeasure();
  // The chart ref that we want to download the PNG for.
  const [png, ref] = useRechartToPng();

  const data = [
    { name: "25/4", wpm: 25, amt: 3000 },
    { name: "30/4", wpm: 30, amt: 2210 },
    { name: "4/5", wpm: 40,  amt: 2290 },
    { name: "9/5", wpm: 42,  amt: 2000 },
    { name: "14/5", wpm: 65,  amt: 2181 },
    { name: "19/5", wpm: 55,  amt: 2500 },
    { name: "24/5", wpm: 52,  amt: 2500 },
  ];

  return (
    <div id="container" ref={containerRef}>
      <h2>Gõ âm cuối</h2>
      <br />
      <LineChart
        ref={ref} // Save the ref of the chart
        data={data}
        height={300}
        width={550}
        margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend wrapperStyle={{ bottom: 5 }} />
        <Line
          type="monotone"
          dataKey="wpm"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default Phan6;
