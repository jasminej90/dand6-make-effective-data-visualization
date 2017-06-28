
      // 1. GGGI for all countries - 2016
      /*
        D3.js setup code
      */
      var svg = dimple.newSvg("#chart1", 1000, 1900);

      // append a title to the graph
      svg.append("text")
      .attr("x", (svg[0][0].clientWidth / 2))
      .attr("y", 150)
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .style("font-weight", "bold")
      .text("Global Gender Gap Index (GGGI) Scores - 2016");
      /*
      Use D3 (not dimple.js) to load the CSV file
      and pass the contents of it to a charting function
      */
      d3.csv("data/gggi_2016_score_all.csv", function (data) {
            /*
            Dimple.js Chart construction code
            */
            var myChart = new dimple.chart(svg, data);
            x = myChart.addMeasureAxis("x", "2016 score");
            x.tickFormat = ',.3f';
            myChart.addCategoryAxis("y", "Country");
            myChart.addSeries(null, dimple.plot.bar);
            myChart.defaultColors = [
            new dimple.color("#BA5277")
            ];
            myChart.draw();
      });

      // 2. Arab world GGGI - 2016
      /*
        D3.js setup code
      */
      var width = 1000, height = 700;
      var svg2 = dimple.newSvg("#chart2", width, height);

      /*
      Use D3 (not dimple.js) to load the CSV file
      and pass the contents of it to a charting function
      */
      d3.csv("data/gggi_arab_2016.csv", function draw(data) {
            /*
            Dimple.js Chart construction code
            */
            var myChart = new dimple.chart(svg2, data);
            myChart.addCategoryAxis("x", "Country"); 
            y = myChart.addMeasureAxis("y", "2016 score");
            y.tickFormat = ',.3f';
            myChart.addSeries(null, dimple.plot.bar);
            myChart.addSeries("2016 world rank", dimple.plot.bubble);

            myChart.defaultColors = [
            // bar
            new dimple.color("#333333"),
            // bubbles
            new dimple.color("#67001f"),
            new dimple.color("#980043"),
            new dimple.color("#ce1256"),
            new dimple.color("#e7298a"),
            new dimple.color("#78414c"),
            new dimple.color("#904e5b"),
            new dimple.color("#a85b6a"),
            new dimple.color("#f18398"),
            new dimple.color("#f39bac"),
            new dimple.color("#df65b0"),
            new dimple.color("#c994c7"),
            new dimple.color("#d4b9da"),
            new dimple.color("#e7e1ef"),
            new dimple.color("#f7f4f9")
            ]; 
            myChart.draw();
      });


      // 3. Arab countries performance 2007-2013
      /*
        D3.js setup code
      */
      var svg3 = dimple.newSvg("#chart3", width, height);

      /*
      Use D3 (not dimple.js) to load the CSV file
      and pass the contents of it to a charting function
      */
      d3.csv("data/gggi_arab_scores_2007-2013.csv", function draw(data) {
            /*
            Dimple.js Chart construction code
            */
      	var myChart = new dimple.chart(svg3, data);
      	x = myChart.addCategoryAxis("x", "variable");
            x.title = "";
      	y = myChart.addMeasureAxis("y", "value");
            y.tickFormat = ',.3f';
            y.title = 'score';
      	y.overrideMin = 0.440
      	myChart.addSeries("Country", dimple.plot.bubble);
      	myChart.addSeries("Country", dimple.plot.line);
      	myChart.addLegend(950, 100, 100, 300, "Right");

            myChart.defaultColors = [
            // bubbles colors
            new dimple.color("#67001f"),
            new dimple.color("#980043"),
            new dimple.color("#ce1256"),
            new dimple.color("#e7298a"),
            new dimple.color("#78414c"),
            new dimple.color("#904e5b"),
            new dimple.color("#a85b6a"),
            new dimple.color("#f18398"),
            new dimple.color("#f39bac"),
            new dimple.color("#df65b0"),
            new dimple.color("#c994c7"),
            new dimple.color("#d4b9da"),
            new dimple.color("#e7e1ef"),
            new dimple.color("#f7f4f9")
            ]; 
            myChart.draw();
    });
