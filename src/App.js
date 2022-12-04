import './css/reset.css';
import './css/App.css';
import back_bg from './imgs/back-bg.jpg';
import Works from './components/Works.js';

function App() {
  return (
    <>
      <div
        className="back-bg"
        style={{ backgroundImage: `url(${back_bg})` }}
      ></div>
      <h1 className="page-title-name">Kitazaki Takanori</h1>
      <h2 className="page-title">My Portfolio</h2>

      <section id="github">
        <h2 className="section-sub-title">GitHub Account</h2>
        <p>@kitazakita</p>
        <p>
          <a href="https://github.com/kitazakita">
            https://github.com/kitazakita
          </a>
        </p>
      </section>

      <section id="skill">
        <h2 className="section-sub-title">Skill</h2>
        <p className="skill-description">
          HTML / CSS / Sass / JavaScript / React / Next.js / Vite / BootStrap /
          MUI / Git / illustrator / Photoshop / Figma
        </p>
      </section>

      <Works />
    </>
  );
}

export default App;
