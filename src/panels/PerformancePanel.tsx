import React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartTooltip,
  exportVisual
} from "@progress/kendo-react-charts";
import { getPerformance } from "../services/dataService";

import { saveAs } from '@progress/kendo-file-saver';
export default function PerformancePanel() {
  const [data, setData] = React.useState<string[]>();
  //_chart:any;
  React.useEffect(() => {
    getPerformance().then((results: string[]) => {
      setData(results);
    })
  }, []);
  /*const onExportVisual = () => {
    const chartVisual = exportVisual(_chart);
    const center = chartVisual.bbox().center();

    // Rotate 45 degrees around center
    chartVisual.transform(transform().rotate(45, center));

    if (chartVisual) {
        exportImage(chartVisual).then(dataURI => saveAs(dataURI, 'chart.png'));
    }
  }*/
  return (
    <div>
    <button className="k-button" >Export as visual element </button>
    <Chart >
      <ChartTitle text="Fund Performance" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={["2014", "2015", "2016", "2017", "2018", "2019", "2020"]} />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem type="line" data={data} />
      </ChartSeries>
      <ChartTooltip  />
    </Chart>
    </div>
  )
}
