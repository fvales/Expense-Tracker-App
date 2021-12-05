import "./Chart.css"
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
    const maxValue = Math.max(...dataPointsValues);

    return <div className="chart">
        {
            props.dataPoints.map((item, index) =>
                <ChartBar
                    key={index}
                    label={item.label}
                    value={item.value}
                    maxValue={maxValue} />)
        }
    </div>
}

export default Chart;