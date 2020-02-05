import Link from "next/link"; // This is the Link API

const Index = () => (
  <div>

    {/* 
      Link Works With Anything

      Just like a button, you can place any of your custom React components or even a div within a Link.

      The only requirement for components placed inside a Link is they should accept an onClick prop.
    */}

    <p>navegação com button</p>
    <Link href="/about">
      <button>Go to About Page</button>
    </Link>




    {/* --------- para baixo é o exemplo de link */}
    <p>para baixo é navegação com link</p>
    {/* esse dá erro */}
    {/* <Link href="/about" title="About Page">
      <a>About Page</a>
    </Link>
    <br/> */}


    <Link href="/about">
      <a title="About Page">About Page</a>
    </Link>
    <br />

    {/* <Link href="/about">
      <a>About Page</a>
    </Link> */}

    <p>Hello Next.js</p>
  </div>
);

export default Index;
