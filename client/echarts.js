const dom = document.getElementById('main');

async function generateChart() {
  const data = await fetchHistoricalMarketData();
  const myChart = echarts.init(dom);
  const options = getChartOptions(data);

  myChart.setOption(options);
  console.log(data);
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
      data: data.historicalMarketData.map((item) => item.symbol),
    },
    yAxis: {},
    series: [
      {
        name: 'Price (USD)',
        type: 'bar',
        data: data.historicalMarketData.map((item) => Number(item.strikePrice)),
        markLine: {
          data: [
            { type: 'average', name: 'Average Price' },
            [
              {
                coord: [0, data.historicalMarketData[0].strikePrice],
              },
              {
                coord: [
                  data.historicalMarketData.length - 1,
                  data.historicalMarketData[
                    data.historicalMarketData.length - 1
                  ].strikePrice,
                ],
              },
            ],
          ],
        },
      },
    ],
    graphic: [
      {
        type: 'text',
        left: 'right',
        top: '5%',
        style: {
          text: `Overall percentage change: ${data.percentageChange}%`,
          fontSize: 14,
          fontWeight: 'bold',
        },
      },
      {
        type: 'text',
        left: 'right',
        top: '8%',
        style: {
          text: `Min price: ${data.priceRange.min}`,
          fontSize: 14,
          fontWeight: 'bold',
        },
      },
      {
        type: 'text',
        left: 'right',
        top: '11%',
        style: {
          text: `Max price: ${data.priceRange.max}`,
          fontSize: 14,
          fontWeight: 'bold',
        },
      },
    ],
  };
}

generateChart();
