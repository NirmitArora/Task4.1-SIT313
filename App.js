import './App.css';
import { FeaturedArticles } from './Components/Articles';
import { center_image } from './Components/Constants/constant';
import { Navbar } from './Components/Navbar';
import { Chance } from 'chance';
import { FeaturedTutorial } from './Components/Tutorial';
import { Signup } from './Components/Signup';
import Footer from './Components/Footer';
const chance = new Chance();
function App() {
  const item = [
    {
      image: 'https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
      title: 'React',
      Desc: 'React is an open-source JavaScript library for building user interfaces. It allows developers to create interactive and dynamic web applications by breaking down UIs into reusable components.',
      author: chance.name()
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
      title: 'NodeJS',
      Desc: 'Node.js is an open-source, server-side JavaScript runtime that allows developers to build scalable and high-performance applications. It is based on the V8 JavaScript engine.',
      author: chance.name()
    },
    {
      image: 'https://www.educative.io/v2api/editorpage/6018530514305024/image/5753173610332160',
      title: 'React Hooks',
      Desc: 'React Hooks are a set of functions introduced in React 16.8 that enable developers to use state and lifecycle features in functional components. They offer a simpler and more readable way to manage component state.',
      author: chance.name()
    }
  ]
  const tut = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0OWvQWztzWymtkTrPlBQISo6083y2QryJQ&usqp=CAU',
      title: 'ES6',
      Desc: 'ECMAScript 2015 (also known as ES6) is a significant update to the JavaScript programming language, introducing features like arrow functions, classes, template literals, and destructuring assignments.',
      username: chance.name()
    },
    {
      image: 'https://reactrouter.com/ogimage.png',
      title: 'React Router',
      Desc: 'React Router is a widely used library for adding navigation and routing to React applications. It enables developers to create single-page applications with multiple views, allowing seamless navigation.',
      username: chance.name()
    },
    {
      image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--YbV36HLj--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/hpg6if7btrwilqkidqbe.png',
      title: 'Express JS',
      Desc: 'Express.js is a fast and minimalist web application framework for Node.js, designed to simplify the creation of robust APIs and web applications. It provides essential tools for routing, middleware, and handling HTTP requests.',
      username: chance.name()
    }
  ]
  return (
    <>
      <Navbar />
      <img className='rnd' src={center_image} alt="Placeholder Image" />
      <h2 className='articlestext'>Featured Articles</h2>
      <FeaturedArticles item={item} />
      <br />
      <h2 className='articlestext'>Featured Tutorials</h2>
      <FeaturedTutorial tut={tut} />
      <br />
      <Signup />
      <br />
      <Footer />
    </>
  );
}

export default App;
