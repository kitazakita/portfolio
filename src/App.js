import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import particlesOptions from './utils/particles.json'; //https://particles.js.org/
import './css/reset.css';
import './css/App.css';
import back_bg from './imgs/back-bg.jpg';
import Works from './components/Works.js';

function App() {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  // const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <>
      <Particles
        id='tsparticles'
        init={particlesInit}
        // loaded={particlesLoaded}
        options={particlesOptions}
      />
      <div
        className='back-bg'
        style={{ backgroundImage: `url(${back_bg})` }}
      ></div>

      <h1 className='page-title-name'>Kitazaki Takanori</h1>
      <h2 className='page-title'>My Portfolio</h2>

      <section id='github'>
        <h2 className='section-sub-title'>GitHub Account</h2>
        <p>@kitazakita</p>
        <p>
          <a href='https://github.com/kitazakita'>
            https://github.com/kitazakita
          </a>
        </p>
      </section>

      <section id='skill'>
        <h2 className='section-sub-title'>Skill</h2>
        <p className='skill-description'>
          HTML / CSS / Sass / JavaScript / React / Next.js / Vite / BootStrap /
          MUI / Git / illustrator / Photoshop / Figma
        </p>
      </section>

      <Works />
    </>
  );
}

export default App;
