window.onload = function() {

    odoo.define('academy.my_js', function (require) {
        "use strict";

        const rpc = require('web.rpc');
        rpc.query({
            model: "academy.cities",
            method: "get_cities_info",
        }).then(function (result) {

            let myChart = document.getElementById("myChart").getContext("2d");

            Chart.defaults.global.defaultFontFamily = "Lato";
            Chart.defaults.global.defaultFontColor = "#777";

            let chart = new Chart(myChart, {
            type: "bar",
            data: {
              labels: Object.keys(result),
              datasets: [
                {
                  label: "Persons/Square Mile",
                  data: Object.values(result),
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                    "rgba(255, 159, 64, 0.6)"
                  ],
                  borderWidth: 1,
                  borderColor: "#777",
                  hoverBorderWidth: 3,
                  hoverBorderColor: "#000"
                }
              ]
            },
            options: {
              title: {
                display: true,
                text: "Population Density for U.S. Cities Statistics",
                fontSize: 25
              },
              legend: {
                position: "right",
                labels: {
                  fontColor: "#000"
                }
              }
            }
            });



            let myChart2 = document.getElementById("myChart2").getContext("2d");

            Chart.defaults.global.defaultFontFamily = "Lato";
            Chart.defaults.global.defaultFontColor = "#777";

            let chart2 = new Chart(myChart2, {
            type: "pie",
            data: {
                labels: Object.keys(result),
                datasets: [{
                    label: "Persons/Square Mile",
                    data: Object.values(result),
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.6)",
                        "rgba(54, 162, 235, 0.6)",
                        "rgba(255, 206, 86, 0.6)",
                        "rgba(75, 192, 192, 0.6)",
                        "rgba(153, 102, 255, 0.6)",
                        "rgba(255, 159, 64, 0.6)"
                    ],
                    borderWidth: 1,
                    borderColor: "#777",
                    hoverBorderWidth: 3,
                    hoverBorderColor: "#000"
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,

                title: {
                    display: true,
                    text: "Population Density for U.S. Cities Statistics",
                    fontSize: 25
                },
                legend: {
                    position: "right",
                    labels: {
                        fontColor: "#000"
                    }
                }
            }
            });


        });

    });

}
