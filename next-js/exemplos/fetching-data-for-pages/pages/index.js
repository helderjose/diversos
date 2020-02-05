import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>Index.js (posts page)</h1>
    <h2>Batman TV Shows</h2>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);


/*
That's a static async function you can add into any page in your app. Using that, we can
fetch data and send them as props to our page.
As you can see, now we are fetching Batman TV shows and passing them into our page as the 'shows' prop.
*/
Index.getInitialProps = async function() {
  console.log("\n\n\npages/index.js -> getInitialProps")
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();


  /*
  Only on the Server
  In this case, the message only printed on the server.
  That's because we render the page on the server. So, we already have the data
  and there is no reason to fetch it again in the client.
  */
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
