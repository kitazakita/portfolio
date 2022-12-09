import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import particlesOptions from './utils/particles.json'; //https://particles.js.org/
import './css/reset.css';
import './css/App.css';
import back_bg from './imgs/back-bg.jpg';
import Works from './components/Works.js';
import Arrow from './components/Arrow.js';
import { useSpring, animated } from 'react-spring';

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const [styles, setStyles] = useSpring(() => {
    return {
      fontSize: '8vw',
    };
  });

  const nameArry = [];
  // nameArry
  const name = 'Kitazaki Takanori';
  nameArry.push(name.split(''));

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

      <h1 className='page-title-name'>
        {nameArry[0].map((v, i) => {
          return <span key={i}>{v}</span>;
        })}
      </h1>

      <animated.h2
        style={styles}
        className='page-title'
        onMouseEnter={(e) => setStyles({ fontSize: '15vw' })}
        onMouseLeave={(e) => setStyles({ fontSize: '8vw' })}
      >
        My Portfolio
      </animated.h2>

      <Arrow />

      <section id='github'>
        <h2 className='section-sub-title'>GitHub Account</h2>
        <p>@kitazakita</p>
        <p>
          <a href='https://github.com/kitazakita'>
            https://github.com/kitazakita
          </a>
        </p>
      </section>

      <Arrow />

      <section id='skill'>
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
