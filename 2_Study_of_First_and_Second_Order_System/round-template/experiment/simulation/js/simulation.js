anychart.onDocumentReady(function () {
  
  // create a data set on our data
  var dataSet = anychart.data.set(getData());

  // map data for the line chart,
  // take x from the zero column and value from the first column
  var seriesData = dataSet.mapAs({ x: 0, value: 1 });

  // create a line chart
  var chart = anychart.line();

  // configure the chart title text settings
  chart.title('Acceptance of same-sex relationships in the US over the last 2 decades');

  // set the y axis title
  chart.yAxis().title('% of people who accept same-sex relationships');

  // create a line series with the mapped data
  var lineChart = chart.line(seriesData);

  // set the container id for the line chart
  chart.container('container');
  
  // draw the line chart
  chart.draw();
  
});

function getData() {
  return [
    ['1990',12],
    ['1991',14],
    ['1993',21],
    ['1994',21],
    ['1996',26],
    ['1998',26],
    ['2000',27],
    ['2002',31],
    ['2004',29],
    ['2006',31],
    ['2008',36],
    ['2010',41],
    ['2012',42],
    ['2014',48],
    ['2016',50],
    ['2018',57]
  ];
}