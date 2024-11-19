const dom = document.getElementById('main');

async function generateChart() {
  const historicalMarketData = await fetchHistoricalMarketData();
  const myChart = echarts.init(dom);
  const options = getChartOptions(historicalMarketData);

  myChart.setOption(options);
  console.log(historicalMarketData);
}

async function fetchHistoricalMarketData(underlying = 'BTCUSDT') {
  const res = await fetch(
    `http://localhost:3000/binance/historical-market-data?underlying=${underlying}`,
  );

  return await res.json();
}

function getChartOptions(data) {
  return {
    title: {
      text: 'Binance API - Historical Market Data Prices',
    },
    tooltip: {},
    legend: {
      data: ['Price (USD)'],
    },
    xAxis: {
      data: data.map((item) => item.symbol),
    },
    yAxis: {},
    series: [
      {
        name: 'Price (USD)',
        type: 'bar',
        data: data.map((item) => Number(item.strikePrice)),
      },
    ],
  };
}

generateChart();
