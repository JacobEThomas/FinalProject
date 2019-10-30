window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Obesity and Economic Status of Schools with # of Food Ads"
        },
        axisX: {
            title:"% Economically Disadvantaged"
        },
        axisY: {
            title:"% Overweight or Obese"
        },
        legend:{
            horizontalAlign: "left"
        },
        data: [{
            type: "bubble",
            showInLegend: true,
            legendText: "Size of Bubble Represents Number of Food Ads",
            legendMarkerType: "circle",
            legendMarkerColor: "grey",
            toolTipContent: "<b>{name}</b><br/>Percent White: {y} <br/> Percent Economically Disadvantaged: {x}<br/> Number of Ads: {z}",
            dataPoints: [
                    { x: 24.9, y: 21.3, z: 16, name: "Anderson High School" },
                    { x: 36.3, y: 23.9, z: 38, name: "Austin High School" },
                    { x: 85, y: 48.6, z: 99, name: "Bedichek Middle School" },
                    { x: 93.8, y: 45.2, z: 113, name: "Burnet Middle School" },
                    { x: 68.6, y: 39.4, z: 15, name: "Covington Middle School" },
                    { x: 68.6, y: 37.5, z: 48, name: "Crockett High School" },
                    { x: 96.7, y: 42.3, z: 77, name: "Dobie Middle School" },
                    { x: 77.1, y: 43.1, z: 60, name: "Fulmore Middle School" },
                    { x: 43.9, y: 22.1, z: 87, name: "Garza High School" },
                    { x: 85.2, y: 32.3, z: 166, name: "LBJ High School" },
                    { x: 48.7, y: 41.5, z: 3, name: "Lamar Middle School" },
                    { x: 87.2, y: 39.6, z: 175, name: "Lanier High School" },
                    { x: 96.2, y: 53.3, z: 9, name: "Martin Middle School" },
                    { x: 96.3, y: 55.4, z: 97, name: "Mendez Middle School" },
                    { x: 26.5, y: 21.3, z: 81, name: "Murchison Middle School" },
                    { x: 39.7, y: 27.9, z: 108, name: "McCallum High School" },
                    { x: 39.2, y: 25.6, z: 29, name: "O. Henry Middle School" },
                    { x: 90.1, y: 43.1, z: 532, name: "Reagan High School" },
                    { x: 33.8, y: 31.8, z: 33, name: "Small Middle School" },
                    { x: 87.4, y: 36.6, z: 327, name: "Travis High School" },
                    { x: 96.5, y: 44.1, z: 155, name: "Webb Middle School" },
    
    
            ]
        }]
    });
    
        var chart2 = new CanvasJS.Chart("chartContainer2", {
            animationEnabled: true,
            theme: "light1", 
            title:{
                text: "Total Ads"
            },
            axisY: {
                title: "Ads"
            },
            data: [{        
                type: "column",  
                showInLegend: false, 
                dataPoints: [      
                    { y: 103.88, label: "<60% Economically Disadvataged" },
                    { y: 261.15,  label: ">60% Economically Disadvataged" },

                ]
            }]
        });

        var chart3 = new CanvasJS.Chart("chartContainer3", {
            animationEnabled: true,
            theme: "light1", 
            title:{
                text: "Total Calories Depicted in Ads"
            },
            axisY: {
                title: "Kcal"
            },
            data: [{        
                type: "column",  
                showInLegend: false, 
                dataPoints: [      
                    { y: 14414.38, label: "<60% Economically Disadvataged" },
                    { y: 50793.10,  label: ">60% Economically Disadvataged" }

                ]
            }]
        });

        var chart4 = new CanvasJS.Chart("chartContainer4", {
            animationEnabled: true,
            theme: "light1", 
            title:{
                text: "Total Fat(g) Depicted in Ads"
            },
            axisY: {
                title: "Fat(g)"
            },
            data: [{        
                type: "column",  
                showInLegend: false, 
                dataPoints: [      
                    { y: 522.98, label: "<60% Economically Disadvataged" },
                    { y: 1665.43,  label: ">60% Economically Disadvataged" }

                ]
            }]
        });

        var chart5 = new CanvasJS.Chart("chartContainer5", {
            animationEnabled: true,
            theme: "light1", // "light1", "light2", "dark1", "dark2"
            title:{
                text: "Total Sugar(g) Depicted in Ads"
            },
            axisY: {
                title: "Sugar(g)"
            },
            data: [{        
                type: "column",  
                showInLegend: false, 
                dataPoints: [      
                    { y: 1655.91, label: "<60% Economically Disadvataged" },
                    { y: 5495.71,  label: ">60% Economically Disadvataged" }

                ]
            }]
        });

        var chart6 = new CanvasJS.Chart("chartContainer6", {
            animationEnabled: true,
            theme: "light1", // "light1", "light2", "dark1", "dark2"
            title:{
                text: "Total Sodium(mg) Depicted in Ads"
            },
            axisY: {
                title: "Sogium(mg)"
            },
            data: [{        
                type: "column",  
                showInLegend: false, 
                dataPoints: [      
                    { y: 17178.61, label: "<60% Economically Disadvataged" },
                    { y: 70966.67,  label: ">60% Economically Disadvataged" }

                ]
            }]
        });

        
        
        chart.render();
        chart2.render();
        chart3.render();
        chart4.render();
        chart5.render();
        chart6.render();
        }