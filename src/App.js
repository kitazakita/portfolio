import { useCallback, useLayoutEffect, useRef } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import particlesOptions from './utils/particles.json'; //https://particles.js.org/
import './css/reset.css';
import './css/App.css';
import back_bg from './imgs/back-bg.jpg';
import Works from './components/Works.js';
import Arrow from './components/Arrow.js';
import { useSpring, animated } from 'react-spring';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // tsparticles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  //react-spring
  const [styles, setStyles] = useSpring(() => {
    return {
      fontSize: '8vw',
    };
  });

  //useRef
  const githubRef = useRef();
  const skillRef = useRef();

  //TOP Name用
  let splitNameArry = [];
  const myName = 'Kitazaki Takanori';
  splitNameArry.push(myName.split(''));
  // console.log(splitNameArry[0]);

  //gsap用
  useLayoutEffect(() => {
    // -- ANIMATION CODE HERE --

    splitNameArry[0].forEach((c, i) => {
      gsap.to(c, 0.6, {
        // ease: Back.easeOut,
        delay: i * 0.05,
        startAt: { y: '-50%', opacity: 0 },
        y: '0%',
        opacity: 1,
      });
    });

    gsap.fromTo(
      githubRef.current,
      {
        // from
        x: '-30vw',
        opacity: 0,
      },
      {
        //To
        scrollTrigger: {
          trigger: githubRef.current,
          start: 'top 80%',
          markers: true,
        },
        x: 0,
        opacity: 1,
        duration: 1.2,
      }
    );

    gsap.fromTo(
      skillRef.current,
      {
        // from
        x: '30vw',
        opacity: 0,
      },
      {
        //To
        scrollTrigger: {
          trigger: skillRef.current,
          start: 'top 80%',
          markers: true,
        },
        x: 0,
        opacity: 1,
        duration: 1.2,
      }
    );

    return () => {
      // cleanup code (optional)
    };
  }, []);

  return (
    <>
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={particlesOptions}
      />
      <div
        className='back-bg'
        style={{ backgroundImage: `url(${back_bg})` }}
      ></div>

      <h1 className='page-title-name'>{myName}</h1>

      <animated.h2
        style={styles}
        className='page-title'
        onMouseEnter={(e) => setStyles({ fontSize: '15vw' })}
        onMouseLeave={(e) => setStyles({ fontSize: '8vw' })}
      >
        My Portfolio
      </animated.h2>

      <Arrow />

      <section id='github' ref={githubRef}>
        <h2 className='section-sub-title'>GitHub Account</h2>
        <p>@kitazakita</p>
        <p>
          <a href='https://github.com/kitazakita'>
            https://github.com/kitazakita
          </a>
        </p>
      </section>

      <Arrow />

      <section id='skill' ref={skillRef}>
        <h2 className='section-sub-title'>Skill</h2>
        <p className='skill-description'>
          HTML / CSS / Sass / JavaScript / React / Next.js / Vite / BootStrap /
          MUI / Git / illustrator / Photoshop / Figma
        </p>
      </section>

      <Arrow />

      <Works />
    </>
  );
}

export default App;
