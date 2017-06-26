# Make Effective Data Visualization

The purpose of this project is to create an explanatory data visualization from **The Global Gender Gap Index (GGGI)** dataset that communicates a clear finding or that highlights relationships or patterns in a dataset.

## Summary 
The Global Gender Gap Index seeks to measure one important aspect of gender equality: the relative gaps between women and men, across a large set of countries and across four key areas: health, education, economics and politics. This project charts 3 different graphs: 2013 GGGI scores for all countries, top 10 countries scores for both years 2013 and 2008, and Arab countries performance for the period 2007-2013.

## Design

### Exploratory Data Analysis and Cleaning (R)
I downloaded the dataset from [The Humanitarian Data Exchange (HDX)](https://data.humdata.org/dataset/global-gender-gap-index-world-economic-forum), which is an open data sharing platform managed by the United Nations Office for the Coordination of Humanitarian Affairs. I used R and RStudio mainly for exploratory data analysis, and data munging.

### Data Visualization (dimple.js)

I used dimple.js to represent all the graphs. For my visual encodings, since I have a total of 136 countries, I chose a `horizontal bar chart` to show their scores. For the top 10 countries, I chose a `vertical bar chart` to show the country's performance in 2013 vs. 2008 (five years earlier). Finally, to represent the country performance during the period of 2007-2013, I chose a combination of `line chart` and `bubble chart` since they are the best chart types to show time-series. I used the bubble chart to represent the score for earch country in the designated year, since in this case we have a few number of points.

## Feedback
include all feedback you received from others on your visualization from the first sketch to the final visualization.
(To be edited after receiving feedback from Udacity coaches)

## Resources
[1] https://data.humdata.org/dataset/global-gender-gap-index-world-economic-forum
[2] http://dimplejs.org/examples_index.html
