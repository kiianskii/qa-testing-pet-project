import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

interface Props {
  data: { name: string; value: number }[];
}

const COLORS = ["#FF6B01", "#9c9c9c"];

const CustomPieChart: React.FC<Props> = ({ data }) => {
  return (
    <PieChart width={500} height={300}>
      <Pie
        data={data}
        cx={243}
        cy={143}
        labelLine={false}
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        outerRadius={143}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default CustomPieChart;
