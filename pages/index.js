import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedEventsData } from '../lib/events'
import Link from 'next/link'
import Dater from '../components/date'
import { GetStaticProps } from 'next'
import { Box, Form, FormField, TextInput, Button, Calendar } from 'grommet';
import React from 'react';

export default function Home({ allEventsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Where's The Crowd</p>
      </section>
      {console.log(typeof allEventsData)}
      {console.log("changed with stringify and parse")}
      <Hive allEventsData={JSON.stringify(allEventsData)}/>
              <script src="/__/firebase/7.16.0/firebase-app.js"></script>
      <script src="/__/firebase/7.16.0/firebase-analytics.js"></script>
      <script src="/__/firebase/7.16.1/firebase-database.js"></script>
      <script src="/__/firebase/init.js"></script>
    </Layout>
  )
}

class Hive extends React.Component {
  render() {
    return (
      <Box>
        <EventList events={this.props.allEventsData} />
      </Box>
    )
  }
}

class EventList extends React.Component {
  render() {
    return (
      <Box>
        <CalendarView />
        <SearchBar />
        <FilteredList events={this.props.events} />
      </Box>
      )
  }
}



class FilteredList extends React.Component {

    render() {
    return (
      <Box> 
          {this.props.events}
      </Box>
      )
  }
}


class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <select>
          <option selected value="grapefruit">All of Boston</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">All Venues</option>
          <option value="mango">Mango</option>
        </select>
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">All Tags</option>
          <option value="mango">Mango</option>
        </select>
      </form>
    );
  }
}


class CalendarView extends React.Component {
    render() {
    return (
        <Box> 
          <Calendar
            size="small"
            date={(new Date()).toISOString()}
            onSelect={(date) => {}}
          />
        </Box>
      )
  }
}




export async function getStaticProps() {
  var data = await getSortedEventsData();
  var allEventsData = Object.entries(data)
  // var result = allEventsData.map(key => {

  //   return {
  //     key, 
  //     allEventsData[key]
  //   }
  // })
  // var result = allEventsData[0];
  //console.log(result)

  console.log("sending to main:>SA:D>:SA>D:AS>D:>S>D:S")
  //return {props: {result}}
  return {props: {allEventsData}}
}

//const allEventsData = fileNames.map(fileName => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, '')

//     // Read markdown file as string
//     const fullPath = path.join(eventsDirectory, fileName)
//     const fileContents = fs.readFileSync(fullPath, 'utf8')

//     // Use gray-matter to parse the events metadata section
//     const matterResult = matter(fileContents)

//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data
//     }
//   })
