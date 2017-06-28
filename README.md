# Make Effective Data Visualization

The purpose of this project is to create an explanatory data visualization from **The Global Gender Gap Index (GGGI)** dataset that communicates a clear finding or that highlights relationships or patterns in a dataset.

## Summary 
The Global Gender Gap Index seeks to measure one important aspect of gender equality: the relative gaps between women and men, across a large set of countries and across four key areas: health, education, economics and politics. This project charts 3 different graphs: 2013 GGGI scores for all countries, top 10 countries scores for both years 2013 and 2008, and Arab countries performance for the period 2007-2013.

## Design

### Exploratory Data Analysis and Cleaning (R)
I downloaded the dataset from [The Humanitarian Data Exchange (HDX)](https://data.humdata.org/dataset/global-gender-gap-index-world-economic-forum), which is an open data sharing platform managed by the United Nations Office for the Coordination of Humanitarian Affairs, and [World Economic Forum Global Gender Gap Report 2016](http://reports.weforum.org/global-gender-gap-report-2016/rankings/). I used R and RStudio mainly for exploratory data analysis, and data munging.

### Data Visualization (dimple.js)

I used dimple.js to represent all the graphs. For my chart types and visual encodings,
- Since I have a total of 144 countries, I chose a `horizontal bar chart` to show their scores.
- For the top 10 countries, I chose a `vertical bar chart` to show the country's performance in 2013 vs. 2008 (five years earlier).
- Finally, to represent the country performance during the period of 2007-2013, I chose a combination of `line chart` and `bubble chart` since they are the best chart types to show time-series. I used the bubble chart to represent the score for earch country in the designated year, since in this case we have a few number of points. I modified the y-axis range to start from 0.4 instead of 0.0 to get a closer and better sense of the variation for the scores over the years.

## Feedback

> You've made a great start here. You've found a dataset that interests you and you've decided on three different graphs to visualise it with. However, you need to bear in mind that the rubric asks for an EXPLANATORY visualisation - see link here for a recap. You need to craft your charts into a story and make sure you've given the reader enough background information. Your current visualisation sparks some questions: what does the GGGI index mean? Is a low score good or bad? why are you showing so many different years - 2013, 2008 & 2013 and finally 2007-2013? The key thing you need to ask yourself before you make any changes is: What is the story I'm trying to tell? When you've answered this you need to add a title and introductory paragraph to your graphic so the reader understands your key message - remember they may not have access to the README file.

I re-desinged my HTML page to include a title and an introductory paragraph that explains to the reader the purpose of the graphs they're about to see. I answered the question of what's GGGI mean, and whether a low score is good or bad. I also made the story focuses more on the Arab world performance in terms of the Gender Gap, and so I replaced the second graph I was showing earlier for the top 10 countries with the performance and rankings of the Arab world with respect to the GGGI. 

> colour coding - I've made a suggestion above re: using colour to represent continent. At the moment you are using the dimple default colours which can be slightly confusing across multiple charts. For example blue represents 2013 and Kuwait and Red represents 2008 and UAE.

I changed the dimple default colors to multi-hue sequential colors from colorbrewer website.

> feedback #3

## Resources
- [1] https://data.humdata.org/dataset/global-gender-gap-index-world-economic-forum
- [2] http://dimplejs.org/examples_index.html
- [3] https://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend#constructor
- [4] https://startbootstrap.com/template-overviews/one-page-wonder/
- [5] http://raseef22.com/en/2017/01/17/closing-gender-gap-arab-world-will-take-356-years/
- [6] http://www.al-fanarmedia.org/2013/11/analyzing-the-arab-gender-gap/
