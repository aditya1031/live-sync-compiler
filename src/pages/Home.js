import React from 'react';

// Components
import NavBar from '../components/NavBar';

// Styles
import './Home.css';

const Home = () => (
  <>
    <NavBar />
    <div className='mainbody'>
      <div className="content-wrapper">
        <h1 id='homeH1'>
          Welcome !!<br />
          to Live Code Sync
        </h1>

        <h3 className='quote'>Paving the Path for a New Age of Online Programming</h3>

        <p id='intro'>
          The world of programming, vast and exhilarating, often presents beginners with unexpected challenges. One such hurdle is the task of setting up a conducive coding environment—a challenge we're determined to tackle head-on. Welcome to "Live Code Sync," where coding becomes not just a task, but a remarkable experience.
        </p>
      </div>




      <div className='buton'>
        <button type="button" className='batan' >Start coding </button>
        <button type="button" className='batan'>sign-up/login</button>
      </div>





      <div className='image-container'>
        <div id='boximg'>
          <img src="/elements/1.png" alt="imagje" className='image' id='im-1' />
          <img src="/elements/2.jpg" alt="imsgje" className='image' id='im-2' />
          <img src="/elements/4.jpg" alt="imdgje" className='image' id='im-3' />
        </div>
      </div>




      <div>
        <h1 className='topics' id='CoreFeatures '>Core Features </h1>



        <div className="features-container">
          <div className='feat'>
            <h3 className='fet' > Code Editor</h3>
            <p className='text'>
              - Immersive Experience: Delve into a world meticulously tailored for the true essence of coding. Every pixel of our editor embodies a fusion of elegance and functionality.
              <br /> <br />
              - Simplicity at its Best: We believe that the best tools fade into the background, letting creativity shine. Our interface is intuitive, sleek, and devoid of distractions, enabling coders to focus solely on their masterpiece.
              <br /> <br />
              - Adaptive Environment: From the cool shades of night mode to the crisp clarity of day settings, our editor adjusts to your preferences, ensuring optimal comfort during extended coding sessions.</p>
          </div>



          <div className='feat'>
            <h3 className='fet' >Seamless Integrations</h3>
            <p className='text'>
              - Beyond Basic Storage: Forget about ad-hoc solutions and welcome the future of code storage. Our system's seamless connection to platforms like Google Drive API and GitHub ensures that your codes are well stored
              <br /> <br />
              - Quick Access & Sharing: With a click, access your projects, share them, or even revert to previous versions. Coding now becomes an organized and fluid journey.
              <br /> <br />
              - Safety & Security: Entrusting us with your code? We honor that trust, and backed up the code with the highest standards of security.</p>
          </div>


          <div className='feat'>
            <h3 className='fet'>Code Room</h3>
            <p className='text'>
              - The Power of Collective Genius: Imagine a space where boundaries fade, where coders from around the globe converge to create, debug, and optimize. That's our 'code room'.
              <br /> <br />
              - Real-time Interactions: Forget delays. Whether it's brainstorming, pair programming, With features like live cursor tracking and synchronized code editing.
              <br /><br />
              - Mentorship & Growth: Our platform isn't just about coding; it's about learning and growth. Engage with mentors, join coding sessions, and witness firsthand the best practices in action.
            </p>
          </div>
        </div>
      </div>







      <div>
        <h1 className='topics' id='contributors '>contributors </h1>




        <div className='peimg' id='aditya'>
          <svg xmlns="http://www.w3.org/2000/svg" width="285" height="298" viewBox="0 0 285 298" fill="none">
            <path d="M285 68.9485C285 143.182 210.175 298 139.313 298C68.4511 298 0 143.182 0 68.9485C0 -5.28478 68.4511 0.0858125 139.313 0.0858125C210.175 0.0858125 285 -5.28478 285 68.9485Z" fill="#D9D9D9" />
          </svg>
        </div>
        <div className='info'>
          <div className='title'>
            <h3 className='name'>Aditya Kumar</h3>
            <h3 className='job'>-Team leader</h3>
          </div>
          <p className='about'>
            Aditya, as the team leader, played a pivotal role in the development of our project. With expertise in backend development, he spearheaded the architectural decisions and ensured smooth and robust functionality.

            His deep knowledge in Docker enabled seamless integration, ensuring scalability and portability for our platform.

            Additionally, Aditya's flair for design was evident as he also contributed to the web designing aspect, ensuring our platform is not only functional but also aesthetically appealing.
          </p>
          <button type="button" className='batan' id='batabout'> link tree</button>
        </div>



        <div className='peimg' id='priyashi' >
          <svg xmlns="http://www.w3.org/2000/svg" width="285" height="298" viewBox="0 0 285 298" fill="none">
            <path d="M285 68.9485C285 143.182 210.175 298 139.313 298C68.4511 298 0 143.182 0 68.9485C0 -5.28478 68.4511 0.0858125 139.313 0.0858125C210.175 0.0858125 285 -5.28478 285 68.9485Z" fill="#D9D9D9" />
          </svg>

        </div>
        <div className='info' id='priya'>
          <div className='title'>
            <h3 className='name' id='priyaname'>Priyashi</h3>
            <h3 className='job' id='priyajob'> -react front-end</h3>
          </div>
          <p className='about' id='priyaabout'>
            Aditya, as the team leader, played a pivotal role in the development of our project. With expertise in backend development, he spearheaded the architectural decisions and ensured smooth and robust functionality.

            His deep knowledge in Docker enabled seamless integration, ensuring scalability and portability for our platform.

          </p>
          <button type="button" className='batan' id='batabout' >link tree </button>
        </div>



        <div className='peimg' id='joti'>
          <svg xmlns="http://www.w3.org/2000/svg" width="285" height="298" viewBox="0 0 285 298" fill="none">
            <path d="M285 68.9485C285 143.182 210.175 298 139.313 298C68.4511 298 0 143.182 0 68.9485C0 -5.28478 68.4511 0.0858125 139.313 0.0858125C210.175 0.0858125 285 -5.28478 285 68.9485Z" fill="#D9D9D9" />
          </svg>
        </div>
        <div className='info'>
          <div className='title'>
            <h3 className='name'>Joti</h3>
            <h3 className='job'>-documentation</h3>
          </div>
          <p className='about'>

            Aditya, as the team leader, played a pivotal role in the development of our project. With expertise in backend development, he spearheaded the architectural decisions and ensured smooth and robust functionality.

            His deep knowledge in Docker enabled seamless integration, ensuring scalability and portability for our platform.

            Additionally, Aditya's flair for design was evident as he also contributed to the web designing aspect, ensuring our platform is not only functional but also aesthetically appealing.
          </p>
          <button type="button" className='batan' id='batabout'>link tree </button>
        </div>


      </div>






      <div>

        <h1 className='topics' id='contributors '>contact us </h1>

        <div className="form">

          <div className="name-email-container"> {/* New container for name and email */}
            <div className='texte' id='name'>
              <input type="text" id="name" name="name" />
            </div>
            <div className='texte' id='email'>
              <input type="email" id="email" name="email" />
            </div>
          </div>


          <div className='texte' id='sub'>
            <input type="text" id="sub" name="sub" />
          </div>
          <div className='texte' id='phone'>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className='texte' id='mess'>
            <textarea id="mess" name="mess" rows="6" cols="20"></textarea>
          </div>
          <button type="button" className='batan' id='submit' >submit</button>
        </div>

        <div className='bun'>
          <h1>
            <button type="button" className='baton' id='insta'>insta</button>
            <button type="button" className='baton' id='github'>github</button>
            <button type="button" className='baton' id='linked'>linked</button>
            <button type="button" className='baton' id='link'>linktree</button>
          </h1>
        </div>
      </div>

      <div className='footer'>
        <h3 id='copr'>© Copyright 2023, All Rights Reserved          |            Adityasingh1031@gmail.com</h3>
        <button type="button" className='batan' id='up'>UP</button>
      </div>
    </div>

  </>
);

export default Home;
