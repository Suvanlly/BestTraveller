import { React, Component } from "react"
import { Tab, Tabs, TabList } from "react-tabs"
import { getTours } from "../../../../api/api"
import PromCard from "./PromCard"
import { Loading } from "../../../../components/Loading/Loading"
import { Panel } from "../styles/StateTab"

class StateTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tours: [],
      isLoading: true,
    }
    this.stateTour = this.stateTour.bind(this)
  }

  componentDidMount() {
    getTours().then((result) => {
      this.setState({
        tours: result.data,
        isLoading: false,
      })
    })
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  stateTour(data, i, stateName) {
    data.city = this.capitalize(data.city)
    if (data.state === stateName) {
      return (
        <PromCard
          id={i}
          key={data._id}
          source={data.image}
          title={data.title}
          price={data.price}
          city={data.city}
          days={data.itinerary.length}
          introduction={data.introduction}
          slug={data.slug}
        />
      )
    }
  }

  render() {
    const { tours, isLoading } = this.state
    const arr = ["QLD", "NSW", "VIC", "SA", "TAS", "WA", "ACT", "NT"]
    if (isLoading) return <Loading>Loading...👩🏻‍💻</Loading>
    return (
      <>
        <Tabs>
          <TabList>
            {arr.map((item) => (
              <Tab key={Math.random()}>{item}</Tab>
            ))}
          </TabList>
          <Panel>
            {tours.length ? (
              tours.map((data, i) => this.stateTour(data, i, "QLD"))
            ) : (
              <h2>New tours are coming...</h2>
            )}
          </Panel>
          <Panel>
            {tours.length ? (
              tours.map((data, i) => this.stateTour(data, i, "NSW"))
            ) : (
              <h2>New tours are coming...</h2>
            )}
          </Panel>
          <Panel>
            {tours.length ? (
              tours.map((data, i) => this.stateTour(data, i, "VIC"))
            ) : (
              <h2>New tours are coming...</h2>
            )}
          </Panel>
          <Panel>
            {tours.length ? (
              tours.map((data, i) => this.stateTour(data, i, "SA"))
            ) : (
              <h2>New tours are coming...</h2>
            )}
          </Panel>
          <Panel>
            {tours.length ? (
              tours.map((data, i) => this.stateTour(data, i, "TAS"))
            ) : (
              <h2>New tours are coming...</h2>
            )}
          </Panel>
          <Panel>
            {tours.length ? (
              tours.map((data, i) => this.stateTour(data, i, "WA"))
            ) : (
              <h2>New tours are coming...</h2>
            )}
          </Panel>
          <Panel>
            {tours.length ? (
              tours.map((data, i) => this.stateTour(data, i, "ACT"))
            ) : (
              <h2>New tours are coming...</h2>
            )}
          </Panel>
          <Panel>
            {tours.length ? (
              tours.map((data, i) => this.stateTour(data, i, "NT"))
            ) : (
              <h2>New tours are coming...</h2>
            )}
          </Panel>
        </Tabs>
      </>
    )
  }
}

export default StateTab
