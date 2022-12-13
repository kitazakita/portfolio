import { useCallback, useLayoutEffect, useRef } from 'react';
import Particles from 'react-particles';
// import { loadFull } from 'tsparticles';
// import { loadFireflyPreset } from 'tsparticles-preset-firefly';
import { loadStarsPreset } from 'tsparticles-preset-stars';
// import particlesOptions from './utils/particles.json'; //https://particles.js.org/
// import particlesOptions from './utils/particles2.json'; //https://particles.js.org/
import './css/reset.css';
import './css/App.css';
import back_bg from './imgs/back-bg.jpg';
import Works from './components/Works.js';
import Arrow from './components/Arrow.js';
import Skill from './components/Skill';
import { useSpring, animated } from 'react-spring';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GitHubIcon from '@mui/icons-material/GitHub';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // tsparticles
  const particlesInit = useCallback(async (engine) => {
    // await loadFull(engine);
    await loadStarsPreset(engine);
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
  const myName = 'Kitazaki Takanori';

  //gsap用
  useLayoutEffect(() => {
    // -- ANIMATION CODE HERE --
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
          // markers: true,
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
          // markers: true,
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
        options={{
          preset: 'stars',
          background: {
            opacity: 0,
          },
          particles: {
            size: {
              value: 1,
            },
          },
        }}
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
        <div className='section-icon'>
          <GitHubIcon />
        </div>
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
        <div className='section-icon'>
          <BuildCircleIcon />
        </div>
        <div className='section-sub-title'>
          <h2>Skill</h2>
          <p>2022年8月より学習を開始しました。</p>
        </div>

        <Skill />
      </section>

      <Arrow />

      <Works />
    </>
  );
}

export default App;
