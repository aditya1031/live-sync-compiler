import React from 'react';

// Components
import NavBar from '../components/NavBar';

// Styles
import './Home.css';

const Home = () => (
  <>
    <NavBar />

    <div className="content-wrapper">
      <h1 id='homeH1'>
        Welcome !!<br />
        to Live Code Sync
      </h1>

      <h3 id='quote'>Paving the Path for a New Age of Online Programming</h3>

      <p id='intro'>
        The world of programming, vast and exhilarating, often presents beginners with unexpected challenges. One such hurdle is the task of setting up a conducive coding environment—a challenge we're determined to tackle head-on. Welcome to "Live Code Sync," where coding becomes not just a task, but a remarkable experience.
      </p>
    </div>
    
    <div className='buton'>
    <button type="button"className='batan' >Start coding </button>
    <button type="button"className='batan'>sign-up/login</button>
    </div>


    <div className='image-container'>
    <img src="/elements/1.png" alt="imagje"  className='image' id='im-1'/>
    <img src="/elements/2.jpg" alt="imsgje" className='image'id='im-2'/>
    <img src="/elements/4.jpg" alt="imdgje" className='image'id='im-3'/>

    </div>
  </>
);

export default Home;
