# Make Effective Data Visualization

The purpose of this project is to create an explanatory data visualization from **The Global Gender Gap Index (GGGI)** dataset that communicates a clear finding or that highlights relationships or patterns in a dataset.

## Summary 
The Global Gender Gap Index seeks to measure one important aspect of gender equality: the relative gaps between women and men, across a large set of countries and across four key areas: health, education, economics and politics. This project charts 3 different graphs: 2016 GGGI scores for all countries, a closer look toward Arab countries GGGI scores and rankings in 2016, and finally Arab countries performance over the period of 2007-2013 to look for any consistency, or lack of it.

## Design

### Exploratory Data Analysis and Cleaning (R)
I downloaded the dataset from [The Humanitarian Data Exchange (HDX)](https://data.humdata.org/dataset/global-gender-gap-index-world-economic-forum), which is an open data sharing platform managed by the United Nations Office for the Coordination of Humanitarian Affairs, and [World Economic Forum Global Gender Gap Report 2016](http://reports.weforum.org/global-gender-gap-report-2016/rankings/). I used R and RStudio mainly for exploratory data analysis, and data munging.

### Data Visualization (dimple.js)

I used dimple.js to represent all the graphs. For my chart types and visual encodings,
- Since I have a total of 144 countries, I chose a `horizontal bar chart` to show their scores. I modified my X axis tick format to show more percision of the GGGI score.
- For the 2016 GGGI Arab countries, I chose a `vertical bar chart` to show the countries' scores compared to other arab countries (Arab world rankings), also, I included the worldwide ranking for each Arab country (as a bubble plot) to have the bigger picture. In terms of the color coding, Arab countries' worldwide ranking is sequentially-colored where darker colors represent countries with higher ranking (good; more equality) and lighter colors represent countries with lower ranking (bad; inequality).
- Finally, to represent the Arab world performance during the period of 2007-2013, I chose a combination of `line chart` and `bubble chart` since they are the best chart types to show time-series. I used the bubble chart to represent the score for earch country in the designated year, since in this case we have a few number of points. I modified the y-axis range to start from 0.45 instead of 0.0 to get a closer and better sense of the variation for the scores over the years.

## Feedback

> You've made a great start here. You've found a dataset that interests you and you've decided on three different graphs to visualise it with. However, you need to bear in mind that the rubric asks for an EXPLANATORY visualisation - see link here for a recap. You need to craft your charts into a story and make sure you've given the reader enough background information. Your current visualisation sparks some questions: what does the GGGI index mean? Is a low score good or bad? why are you showing so many different years - 2013, 2008 & 2013 and finally 2007-2013? The key thing you need to ask yourself before you make any changes is: What is the story I'm trying to tell? When you've answered this you need to add a title and introductory paragraph to your graphic so the reader understands your key message - remember they may not have access to the README file. Also, labelling - on the whole your labelling is looking good but you need to make sure you don't use generic names such as "variable" and "value" as they don't mean much to the reader.

I re-desinged my HTML page to include a title and an introductory paragraph that explains to the reader the purpose of the graphs they're about to see. I answered the question of what's GGGI mean, and whether a low score is good or bad. I also made the story focuses more on the Arab world performance in terms of the Gender Gap, and so I replaced the second graph I was showing earlier for the top 10 countries with the performance and rankings of the Arab world with respect to the GGGI. I also updated my dataset to show the GGGI scores for 2016 from the World Economic Forum Report. As for labeling, I modifed the y-axis title for the last chart to be 'score' instead of 'value', and for the x-axis I removed the title as it's clear that it's showing years.

> The color theme used in the third chart makes it hard to differentiate one country to another. Also, it is hard to see the trend of 13 categories in the same line plot. In the second plot, the detailed data shown in the tooltip when hovering on the point is more comprehensive than the ones in the bars. I also think that it is redundant to have both bars and points. Color encoding is redundant here as the ranks are already encoded in bar heights. Suggestion: Remove the points and include the country rank information into the details of bars' tooltip.

I changed the color theme from sequential to dimple default in the third chart, and modified the y-axis range to zoom-in on the majority of the countries. As for the second chart, I removed the points and included the country rank into the details of bars' tooltip.

> It would greatly improve the readability to have a color distinction between different continents, especially on the first plot in this case.

I colored the bar chart based on continents, I also made the legend interactive where the user can click on the legend to
show/hide continents since the list of the countries is too long.

_FYI, I posted a question on [Udacity Discussion Forum](https://discussions.udacity.com/t/please-give-me-feedback-on-data-visualization-p6-global-gender-gap-index-dataset/290572)_

## Resources
- [1] https://data.humdata.org/dataset/global-gender-gap-index-world-economic-forum
- [2] http://dimplejs.org/examples_index.html
- [3] https://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend#constructor
- [4] https://startbootstrap.com/template-overviews/one-page-wonder/
- [5] http://raseef22.com/en/2017/01/17/closing-gender-gap-arab-world-will-take-356-years/
- [6] http://www.al-fanarmedia.org/2013/11/analyzing-the-arab-gender-gap/
- [7] http://dimplejs.org/advanced_examples_viewer.html?id=advanced_interactive_legends
