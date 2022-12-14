import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import back_bg from '../imgs/back-bg.jpg';

const BackBg = () => {
  // tsparticles
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
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
              value: 1.5,
            },
          },
        }}
      />
      <div
        className='back-bg'
        style={{ backgroundImage: `url(${back_bg})` }}
      ></div>
    </>
  );
};

export default BackBg;
