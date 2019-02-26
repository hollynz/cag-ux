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

$(document).ready(function() {
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
        '#222222'
      ],
      borderColor: [
        // '#222222',
        // '#222222',
        // '#222222',
        // '#222222'
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
      enabled: false
    }
  }
});
var ctx2 = $('#myChart2');
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
        // '#222222',
        // '#222222'
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
    },
    tooltips: {
      enabled: false
    }
  }
});
var ctx3 = $('#myChart3');
var mobileCompChart = new Chart(ctx3, {
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
        // '#222222',
        // '#222222',
        // '#222222'
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
    },
    tooltips: {
      enabled: false
    }
  }
});
var ctx4 = $('#myChart4');
var avgScoreChart = new Chart(ctx4, {
  type: 'bar',
  data: {
    labels: ["Q1", "Q2", "Q3a", "Q3b", "Q4", "Q5", "Q6"],
    datasets: [{
      label: 'Average scores per question',
      data: [1.61, 1.54, 1.69, 1.33, 1.36, 1.84, 1.21],
      backgroundColor: [
        '#6991ac',
        '#67727a',
        '#c3d7df',
        '#6991ac',
        '#67727a',
        '#c3d7df',
        '#6991ac'
      ],
      borderColor: [
        // '#222222',
        // '#222222',
        // '#222222',
        // '#222222',
        // '#222222',
        // '#222222',
        // '#222222'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Score'
        },
        ticks: {
          beginAtZero:true,
          callback: function(value, index, values) {
            if (Math.floor(value) === value) {
              return value;
            }
          }
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Question'
        },
        ticks: {
          beginAtZero:true,
        }
      }]
    },
    title: {
      display: true,
      text: 'Average scores per question'
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    }
  }
});
});


