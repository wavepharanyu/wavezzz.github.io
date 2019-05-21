Highcharts.chart('budget', {
  chart: {
      type: 'bar'
  },
  title: {
      text: 'งบประมาณของกระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์ แบ่งตามประเภทของงบประมาณ'
  },
  subtitle: {
      text: 'Source: m-society.go.th'
  },
  xAxis: {
      categories: ['2556', '2557', '2558', '2559', '2560', '2561', '2562'],
      title: {
          text: null
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'งบประมาณ (ล้านบาท)',
          align: 'high'
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
      valueSuffix: ' ล้านบาท'
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          }
      }
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
      shadow: true
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'งบอุดหนุน',
      data: [3350.06, 2562.4976,	4421.9456,	2548.14,	4419.27,	5951.58, 6510.54]
  }, {
      name: 'งบดำเนินงาน',
      data: [3861.33,	3801.1613,	3167.9402,	3567.78,	3410.18,	3542.88,	2998.48]
  }, {
      name: 'งบบุคคลากร',
      data: [2448.2,	2449.6866,	2572.9482,	2766.58,	2667.91,	2652.86,	2741.76]
  }, {
      name: 'งบลงทุน',
      data: [591.181,	870.2418,	584.4809,	962.78,	976.04,	1383.16,	915.49]
  }, {
      name: 'งบรายจ่ายอื่นๆ',
      data: [543.0736,	2449.6866,	287.4629,	3567.78,	219.13,	399.05,	175.5019]
}]
});