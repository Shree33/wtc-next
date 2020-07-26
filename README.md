This is a starter template for [Learn Next.js](https://nextjs.org/learn).

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