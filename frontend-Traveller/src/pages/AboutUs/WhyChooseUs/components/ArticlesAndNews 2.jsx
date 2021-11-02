import React from "react"
import { Title, Underline } from "../styles/utils"
import ArticlesCard from "./ArticlesCard"
import blooms from "../img/blooms.png"
import beaches from "../img/beaches.png"
import trips from "../img/trips.png"
import events from "../img/events.png"
import { Cards, Articles } from "../styles/articlesCard"

const news = [
  {
    id: 1,
    date: "4 DECEMBER, 2021",
    source: events,
    title: "THE GHAN: THE TRAIN JOURNEY OF A LIFETIME",
    article:
      "The Ghan is back on track. After a month long hiatus due to COVID-19, the longest it’s been off the rails",
  },
  {
    id: 2,
    date: "12 JANUARY, 2021",
    source: beaches,
    title: "8 MUST-SEE DESTINATIONS",
    article:
      "With talk of a AU travel bubble coming there is no doubt you'll be excited to venture overseas for the first time in almost a year.",
  },
  {
    id: 3,
    date: "2 DECEMBER, 2020",
    source: blooms,
    title: "THE-BEATEN-TRACK AUSSIE TREASURES",
    article:
      "Sydney Opera House, Federation Square… there’s many places that are simply iconic worldwide.",
  },
  {
    id: 4,
    date: "17 AUGUST, 2020",
    source: trips,
    title: "DISCOVER SOUTH AUSTRALIA",
    article:
      "This incredible state has so much to offer! With twelve regions to explore - including the otherworldly Flinders Range",
  },
]

const ArticlesAndNews = () => (
  <Articles>
    <Title>
      Articles & <Underline>News</Underline>
    </Title>
    <Cards>
      {news.map((data) => (
        <ArticlesCard
          key={data.id}
          source={data.source}
          date={data.date}
          title={data.title}
          article={data.article}
        />
      ))}
    </Cards>
  </Articles>
)

export default ArticlesAndNews
