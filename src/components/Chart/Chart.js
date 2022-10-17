import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const sum = props.dataPoints.reduce(
    (x, dataPoint) => x + dataPoint.value,
    0
  );

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          dataPoint={dataPoint}
          totalSum={sum}
        />
      ))}
    </div>
  );
};

export default Chart;
