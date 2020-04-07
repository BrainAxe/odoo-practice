window.onload = function () {
  odoo.define("academy.dashboard", function (require) {
    "use strict";

    const rpc = require("web.rpc");
    rpc
      .query({
        model: "academy.cities",
        method: "get_cities_info",
      })
      .then(function (result) {
        let myCanvas = document.getElementById("chart");
        myCanvas.height = "380";
        let myCanvasContext = myCanvas.getContext("2d");
        let gradientStroke1 = myCanvasContext.createLinearGradient(
          0,
          0,
          0,
          280
        );
        gradientStroke1.addColorStop(0, "rgba(110, 80, 235)");
        gradientStroke1.addColorStop(1, "rgba(3, 173, 247)");

        let myChart = new Chart(myCanvas, {
          type: "bar",
          data: {
            labels: Object.keys(result),
            datasets: [
              {
                label: "Main Project",
                data: Object.values(result),
                backgroundColor: gradientStroke1,
                hoverBackgroundColor: gradientStroke1,
                hoverBorderWidth: 2,
                hoverBorderColor: "gradientStroke1",
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
              intersect: false,
            },
            scales: {
              xAxes: [
                {
                  barPercentage: 0.4,
                  ticks: {
                    fontColor: "#b0bac9",
                  },
                  display: true,
                  gridLines: {
                    display: true,
                    drawBorder: false,
                    zeroLineColor: "rgba(142, 156, 173,0.1)",
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    fontColor: "#b0bac9",
                  },
                  display: true,
                  gridLines: {
                    display: true,
                    drawBorder: false,
                    zeroLineColor: "rgba(142, 156, 173,0.1)",
                  },
                },
              ],
            },
            legend: {
              display: false,
            },
          },
        });

        let myCanvas2 = document.getElementById("site-executive");
        myCanvas2.height = "343";
        let myCanvasContext2 = myCanvas2.getContext("2d");
        let gradientStroke2 = myCanvasContext2.createLinearGradient(
          0,
          0,
          0,
          240
        );
        gradientStroke2.addColorStop(0, "#765be6");
        gradientStroke2.addColorStop(1, "#765be6");
        let gradientStroke3 = myCanvasContext.createLinearGradient(
          0,
          0,
          0,
          280
        );
        gradientStroke2.addColorStop(0, "#26c2f7");
        gradientStroke2.addColorStop(1, "#26c2f7");
        let gradientStroke4 = myCanvasContext.createLinearGradient(
          0,
          0,
          0,
          280
        );
        gradientStroke4.addColorStop(0, "#e44374");
        gradientStroke4.addColorStop(1, "#e44374");
        let myChart2 = new Chart(myCanvas2, {
          type: "line",
          data: {
            labels: [2013, 2014, 2015, 2016, 2017, 2018, 2019],
            type: "line",
            datasets: [
              {
                label: "Users",
                data: [0, 70, 75, 120, 94, 141, 162],
                backgroundColor: "transparent",
                borderColor: gradientStroke1,
                pointBackgroundColor: "#fff",
                pointHoverBackgroundColor: gradientStroke1,
                pointBorderColor: gradientStroke1,
                pointHoverBorderColor: gradientStroke1,
                pointBorderWidth: 4,
                pointRadius: 2,
                pointHoverRadius: 2,
                borderWidth: 2,
              },
              {
                label: "Page Views",
                data: [0, 50, 40, 80, 40, 79, 120],
                backgroundColor: "transparent",
                borderColor: gradientStroke2,
                pointBackgroundColor: "#fff",
                pointHoverBackgroundColor: gradientStroke2,
                pointBorderColor: gradientStroke2,
                pointHoverBorderColor: gradientStroke2,
                pointBorderWidth: 4,
                pointRadius: 2,
                pointHoverRadius: 2,
                borderWidth: 2,
              },
              {
                label: "New Users",
                data: [0, 50, 0, 100, 50, 130, 100, 140],
                backgroundColor: "transparent",
                borderColor: gradientStroke3,
                pointBackgroundColor: "#fff",
                pointHoverBackgroundColor: gradientStroke3,
                pointBorderColor: gradientStroke3,
                pointHoverBorderColor: gradientStroke3,
                pointBorderWidth: 4,
                pointRadius: 2,
                pointHoverRadius: 2,
                borderWidth: 2,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
              mode: "index",
              titleFontSize: 12,
              titleFontColor: "rgba(0,0,0,0.5)",
              bodyFontColor: "rgba(0,0,0,0.5)",
              backgroundColor: "#fff",
              cornerRadius: 3,
              intersect: false,
            },
            legend: {
              display: false,
              labels: {
                usePointStyle: true,
              },
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    fontColor: "#8e9cad",
                  },
                  display: true,
                  gridLines: {
                    color: "rgba(142, 156, 173,0.2)",
                  },
                  scaleLabel: {
                    display: false,
                    labelString: "Month",
                    fontColor: "#8e9cad",
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    fontColor: "#8e9cad",
                  },
                  display: true,
                  gridLines: {
                    display: false,
                    drawBorder: true,
                  },
                  scaleLabel: {
                    display: false,
                    labelString: "Revenue by channel",
                    fontColor: "#8e9cad",
                  },
                },
              ],
            },
            title: {
              display: false,
              text: "Normal Legend",
            },
          },
        });
      });
  });
};
