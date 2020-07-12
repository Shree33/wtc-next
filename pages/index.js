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
      <Hive allEventsData={allEventsData} />
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


        // 
        // 
        // 
        // <FilterBar events={this.props.allEventsData} />

class FilteredList extends React.Component {
    render() {
    return (
      <Box> 
       <ul className={utilStyles.list}>
          {this.props.events.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/events/[id]" as={`/events/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Dater dateString={date} />
              </small>
            </li> 
          ))}
        </ul>
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

// class ListView extends React.Component {
//     render() {
//     return (
//         <Box> 
//         </Box>
//       )
//   }

  
// }

// class SelectedEvent extends React.Component {
//     render() {
//     return (
//         <Box> 
//         </Box>
//       )
//   }

  
// }

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
  const allEventsData = getSortedEventsData()
  return {
    props: {
      allEventsData
    }
  }
}


