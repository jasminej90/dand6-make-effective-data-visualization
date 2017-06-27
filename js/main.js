
      // 1. GGGI for all countries - 2013 Graph
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
      .text("Global Gender Gap Index (GGGI) Scores - 2013");
    /*
    Use D3 (not dimple.js) to load the CSV file
    and pass the contents of it to a charting function
    */
      d3.csv("data/ggi_2013_score_all.csv", function (data) {
            /*
            Dimple.js Chart construction code
            */
      	var myChart = new dimple.chart(svg, data);
      	myChart.addMeasureAxis("x", "2013 Score");
      	myChart.addCategoryAxis("y", "Country");
      	myChart.addSeries(null, dimple.plot.bar);
      	myChart.draw();
      });


      // 2. Top 10 countries scores 2008, 2013 Graph
      /*
        D3.js setup code
      */
      var width = 1000, height = 600;
      var svg2 = dimple.newSvg("#chart2", width, height);
      // append a title to the graph
      svg2.append("text")
      .attr("x", (svg2[0][0].clientWidth / 2))
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .style("font-weight", "bold")
      .text("Top 10 Countries GGGI Scores for Years 2008, 2013");
    /*
    Use D3 (not dimple.js) to load the CSV file
    and pass the contents of it to a charting function
    */
      d3.csv("data/top_10_countries_08-13.csv", function draw(data) {
            /*
            Dimple.js Chart construction code
            */
      	var myChart = new dimple.chart(svg2, data);
      	myChart.addCategoryAxis("x", ["Country", "variable"]); 
      	myChart.addMeasureAxis("y", "value");
      	myChart.addSeries("variable", dimple.plot.bar);
      	myChart.addLegend(900, 70, 100, 20, "Right")
      	myChart.draw();
      });


      // 3. Arab countries performance 2007-2013 Graph
      /*
        D3.js setup code
      */
      var svg3 = dimple.newSvg("#chart3", width, height);
      // append a title to the graph
      svg3.append("text")
      .attr("x", (svg3[0][0].clientWidth / 2))
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .style("font-weight", "bold")
      .text("GGGI for Arab countries 2007 - 2013");
    /*
    Use D3 (not dimple.js) to load the CSV file
    and pass the contents of it to a charting function
    */
      d3.csv("data/ggi_arab_scores_08-13.csv", function draw(data) {
            /*
            Dimple.js Chart construction code
            */
      	var myChart = new dimple.chart(svg3, data);
      	myChart.addCategoryAxis("x", "variable"); 
      	y = myChart.addMeasureAxis("y", "value");
      	y.overrideMin = 0.4
      	myChart.addSeries("Country", dimple.plot.bubble);
      	myChart.addSeries("Country", dimple.plot.line);
      	myChart.addLegend(950, 100, 100, 300, "Right")
          myChart.draw();
    });





