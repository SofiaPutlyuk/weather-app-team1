import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "11 pm", temp: 14 },
  { time: "Oct 14", temp: 13 },
  { time: "1 am", temp: 11 },
  { time: "2 am", temp: 10 },
  { time: "3 am", temp: 10 },
  { time: "4 am", temp: 9.8 },
  { time: "5 am", temp: 10 },
  { time: "6 am", temp: 11.5 },
  { time: "7 am", temp: 12.5 },
  { time: "8 am", temp: 13.5 },
  { time: "9 am", temp: 14.2 },
  { time: "10 am", temp: 16 },
  { time: "11 am", temp: 17.5 },
  { time: "12 am", temp: 18 },
  { time: "1 pm", temp: 19.5 },
  { time: "2 pm", temp: 21.5 },
  { time: "3 pm", temp: 24 },
  { time: "4 pm", temp: 25 },
  { time: "5 pm", temp: 26 },
  { time: "6 pm", temp: 26 },
];

const WeatherChart = () => {
  return (
    <div className="weather-chart">
      <h3>Hourly forecast</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid stroke="#ccc" strokeOpacity={0.3} />
          <XAxis
            dataKey="time"
            tick={{ fontSize: 12 }}
            interval="preserveStartEnd"
          />
          <YAxis
            domain={[5, 27]}
            ticks={[5, 10, 15, 20, 25]}
            tickFormatter={(value) => `${value}°C`}
            tick={{ fontSize: 12 }}
          />
          <Tooltip formatter={(value) => `${value}°C`} />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#FFB36C"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
