import { useLayoutEffect, useRef } from 'react';
import './css/reset.css';
import './css/App.css';
import Works from './components/Works.js';
import Arrow from './components/Arrow.js';
import Skill from './components/Skill';
import { useSpring, animated } from 'react-spring';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GitHubIcon from '@mui/icons-material/GitHub';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import MyName from './components/MyName';
import BackBg from './components/BackBg';
import Test from './components/Test';

gsap.registerPlugin(ScrollTrigger);

function App() {
  //react-spring
  const [styles, setStyles] = useSpring(() => {
    return {
      fontSize: '8vw',
    };
  });

  //useRef
  const githubRef = useRef();
  const skillRef = useRef();

  //gsap用
  useLayoutEffect(() => {
    // -- ANIMATION CODE HERE --
    gsap.fromTo(
      githubRef.current,
      {
        // from
        x: '-10vw',
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
        x: '10vw',
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
      <Test />

      <BackBg />

      <MyName gsap={gsap} ScrollTrigger={ScrollTrigger} />

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
          <h2 className='section-sub-title'>Skill</h2>
          <p>★2022年8月より学習を開始しました。</p>
        </div>

        <Skill />
      </section>

      <Arrow />

      <Works />
    </>
  );
}

export default App;
