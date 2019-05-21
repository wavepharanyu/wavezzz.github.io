Highcharts.chart('BoxPlot2', {

  chart: {
      type: 'boxplot'
  },

  title: {
      text: 'Income of older people percent of population incomes after cut outlier'
  },

  legend: {
      enabled: false
  },

  xAxis: {
      //categories: ['1', '2', '3', '4', '5'],
      title: {
         // text: 'Experiment No.'
      }
  },

  yAxis: {
      title: {
          text: 'Percentage'
      },
      plotLines: [{
          value: 16.69432115,
          color: 'red',
          width: 1,
          label: {
              text: 'Theoretical mean: 16.69432115',
              align: 'center',
              style: {
                  color: 'gray'
              }
          }
      }]
  },

  series: [{
      name: 'Observations',
      data: [
          [7.6458, 14.1915, 17.567, 18.7596, 25.3524],
      ],
      tooltip: {
          headerFormat: '<em>Experiment No {point.key}</em><br/>'
      }
  }, {
      name: 'Outlier',
      color: Highcharts.getOptions().colors[0],
      type: 'scatter',
      data: [ // x, y positions where 0 is the first category
      ],
      marker: {
          fillColor: 'white',
          lineWidth: 1,
          lineColor: Highcharts.getOptions().colors[0]
      },
      tooltip: {
          pointFormat: 'Observation: {point.y}'
      }
  }]

});