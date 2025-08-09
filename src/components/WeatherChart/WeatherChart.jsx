import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



const WeatherChart = ({infoChart}) => {
  const data = transformDataForChart(infoChart);
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
function transformDataForChart(infoChart) {
   if (!infoChart || !infoChart.list) return [];
     return infoChart.list.map(item => {
    const date = new Date(item.dt * 1000);
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;
    const time = `${hours} ${ampm}`;

    const temp = Math.round(item.main.temp);

    return { time, temp };
  });
}
export default WeatherChart;
