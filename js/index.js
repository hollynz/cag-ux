$(function() {
  $('#slides-1, #slides-2').superslides({
  });
});
$(function() {
  $('#slides-3').superslides({
  });
});
$(function() {
  $('#slides-4').superslides({
  });
});
var ctx1 = $("#myChart1");
var ageChart = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ["<18", "18–25", "26–41", "41+"],
    datasets: [{
      label: 'Age',
      data: [44, 28, 20, 8],
      backgroundColor: [
        '#d75c37',
        '#67727a',
        '#c3d7df',
        '#67727a;'
      ],
      borderColor: [
        '#222222',
        '#222222',
        '#222222',
        '#222222'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: '%'
        },
        ticks: {
          beginAtZero: true
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Age'
        }
      }]
    },
    title: {
      display: true,
      text: 'Participant ages'
    },
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem) {
          return tooltipItem.xLabel;
        }
      }
    }
  }
});

var ctx2 = $("#myChart2");
var usedSiteBeforeChart = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ["Yes", "No"],
    datasets: [{
      label: 'Used Site Before',
      data: [12, 88],
      backgroundColor: [
        '#67727a',
        '#d75c37'
      ],
      borderColor: [
        '#222222',
        '#222222'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: '%'
        },
        ticks: {
          beginAtZero:true
        }
      }]
    },
    title: {
      display: true,
      text: 'Whether participant had used current CAG website before'
    },
    legend: {
      display: false
    }
  }
});



var ctx3 = $('#myChart3');
var mobileCompGraph = new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ["Mobile", "Computer", "Both"],
    datasets: [{
      label: 'Mobile vs Computer Usage',
      data: [52.17, 34.78, 13.04],
      backgroundColor: [
        '#d75c37',
        '#67727a',
        '#c3d7df'
      ],
      borderColor: [
        '#222222',
        '#222222',
        '#222222'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: '%'
        },
        ticks: {
          beginAtZero:true
        }
      }]
    },
    title: {
      display: true,
      text: 'Mobile vs computer preference'
    },
    legend: {
      display: false
    }
  }
});
