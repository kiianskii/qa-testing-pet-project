import React from "react";
import { useMediaQuery } from "react-responsive";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

interface Props {
  data: { name: string; value: number }[];
}

const COLORS = ["#FF6B01", "#9c9c9c"];

const CustomPieChart: React.FC<Props> = ({ data }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <PieChart width={isMobile ? 300 : 500} height={isMobile ? 200 : 300}>
      <Pie
        data={data}
        cx={isMobile ? 150 : 250}
        cy={isMobile ? 100 : 150}
        labelLine={false}
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        outerRadius={isMobile ? 50 : 100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default CustomPieChart;
