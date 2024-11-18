(async () => {
  const res = await fetch(
    `http://localhost:3000/binance/exercise-history?underlying=BTCUSDT`,
  );

  const data = await res.json();

  const myChart = echarts.init(document.getElementById('main'));

  console.log(data);

  const option = {
    title: {
      text: 'Binance API Historical Market Data Prices',
    },
    tooltip: {},
    legend: {
      data: ['price'],
    },
    xAxis: {
      data: data.map((data) => data.symbol),
    },
    yAxis: {},
    series: [
      {
        name: 'price (USD)',
        type: 'bar',
        data: data.map((data) => `${data.strikePrice}`),
      },
    ],
  };

  myChart.setOption(option);
})();
