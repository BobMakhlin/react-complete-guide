import "./ChartBar.css";

const DEFAULT_FILL_HEIGHT = "0%";

const ChartBar = (props) => {
  let fillHeight = DEFAULT_FILL_HEIGHT;

  if (props.totalSum > 0) {
    const percentage = Math.round(
      (props.dataPoint.value / props.totalSum) * 100
    );
    fillHeight = percentage + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: fillHeight}}></div>
      </div>
      <div className= "chart-bar__label">{props.dataPoint.label}</div>
    </div>
  );
};

export default ChartBar;
