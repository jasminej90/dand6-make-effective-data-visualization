

      // 1. GGGI for all countries - 2016
      /*
        D3.js setup code
      */
      var svg = dimple.newSvg("#chart1", 950, 1900);

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
      d3.csv("data/gggi_2016_score_all_new.csv", function (data) {
            /*
            Dimple.js Chart construction code
            */
            var myChart = new dimple.chart(svg, data);
            x = myChart.addMeasureAxis("x", "2016 score");
            x.tickFormat = ',.3f';
            myChart.addCategoryAxis("y", "Country");
            myChart.addSeries(["rank", "continent"], dimple.plot.bar);
            var myLegend = myChart.addLegend(900, 200, 65, 200, "Right");

            myChart.defaultColors = [
            new dimple.color("#8dd3c7"),
            new dimple.color("#ffffb3"),
            new dimple.color("#bebada"),
            new dimple.color("#fb8072"),
            new dimple.color("#80b1d3"),
            new dimple.color("#fdb462")
            ];
            // console.log(dimple.getUniqueValues(data, "continent"));

            myChart.draw();

            // interactive legend

            // This is a critical step.  By doing this we orphan the legend. This
            // means it will not respond to graph updates.  Without this the legend
            // will redraw when the chart refreshes removing the unchecked item and
            // also dropping the events we define below.
            myChart.legends = [];
        // This block simply adds the legend title. I put it into a d3 data
        // object to split it onto 2 lines.  This technique works with any
        // number of lines, it isn't dimple specific.
        svg.selectAll("title_text")
          .data(["Click legend to","show/hide continents"])
          .enter()
          .append("text")
            .attr("x", 856)
            .attr("y", function (d, i) { return 180 + i * 14; })
            .style("font-family", "sans-serif")
            .style("font-size", "10px")
            .style("color", "Black")
            .text(function (d) { return d; });

            // Get a unique list of Owner values to use when filtering
            var filterValues = dimple.getUniqueValues(data, "continent");
            // Get all the rectangles from our now orphaned legend
            myLegend.shapes.selectAll("rect")
            // Add a click event to each rectangle
            .on("click", function (e) {
            // This indicates whether the item is already visible or not
            var hide = false;
            var newFilters = [];
            // If the filters contain the clicked shape hide it
            filterValues.forEach(function (f) {
              if (f === e.aggField.slice(-1)[0]) {
                hide = true;
              } else {
                newFilters.push(f);
              }
            });
            // Hide the shape or show it
            if (hide) {
              d3.select(this).style("opacity", 0.2);
            } else {
              newFilters.push(e.aggField.slice(-1)[0]);
              d3.select(this).style("opacity", 0.8);
            }
            // Update the filters
            filterValues = newFilters;
            // Filter the data
            myChart.data = dimple.filterData(data, "continent", filterValues);
            // Passing a duration parameter makes the chart animate. Without
            // it there is no transition
            myChart.draw(800);
          });

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
            myChart.addSeries("2016 world rank", dimple.plot.bar);
            // myChart.addSeries("2016 world rank", dimple.plot.bubble);

            myChart.defaultColors = [
            // bar
            new dimple.color("#bebada"),
            // bubbles
            // new dimple.color("#67001f"),
            // new dimple.color("#980043"),
            // new dimple.color("#ce1256"),
            // new dimple.color("#e7298a"),
            // new dimple.color("#78414c"),
            // new dimple.color("#904e5b"),
            // new dimple.color("#a85b6a"),
            // new dimple.color("#f18398"),
            // new dimple.color("#f39bac"),
            // new dimple.color("#df65b0"),
            // new dimple.color("#c994c7"),
            // new dimple.color("#d4b9da"),
            // new dimple.color("#e7e1ef"),
            // new dimple.color("#f7f4f9")
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
      	y.overrideMin = 0.540
      	myChart.addSeries("Country", dimple.plot.bubble);
      	myChart.addSeries("Country", dimple.plot.line);
      	myChart.addLegend(950, 100, 100, 300, "Right");

            // myChart.defaultColors = [
            // // bubbles colors
            // new dimple.color("#67001f"),
            // new dimple.color("#980043"),
            // new dimple.color("#ce1256"),
            // new dimple.color("#e7298a"),
            // new dimple.color("#78414c"),
            // new dimple.color("#904e5b"),
            // new dimple.color("#a85b6a"),
            // new dimple.color("#f18398"),
            // new dimple.color("#f39bac"),
            // new dimple.color("#df65b0"),
            // new dimple.color("#c994c7"),
            // new dimple.color("#d4b9da"),
            // new dimple.color("#e7e1ef"),
            // new dimple.color("#f7f4f9")
            // ]; 
            myChart.draw();
    });


