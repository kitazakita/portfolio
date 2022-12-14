import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
// import 'swiper/css/pagination';
import { Autoplay, EffectCards } from 'swiper';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

import works from './works.json';
import img01 from '../imgs/works-img01.png';
import img02 from '../imgs/works-img02.png';
import img03 from '../imgs/works-img03.png';

const Works = () => {
  const imgArry = [];
  imgArry.push(img01);
  imgArry.push(img02);
  imgArry.push(img03);

  return (
    <section id='works'>
      <div className='section-icon'>
        <CollectionsBookmarkIcon />
      </div>

      <h2 className='section-main-title section-sub-title'>Works</h2>
      <div className='section-sub-title'>
        <p>全て架空のWEBサイトです。</p>
        <p>スワイプしてご覧下さい。</p>
      </div>

      <Swiper
        effect={'cards'}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCards]}
        className='mySwiper'
        loop={true}
        style={{ overflow: 'hidden' }}
      >
        {works.data.map((v, i) => {
          return (
            <SwiperSlide key={i}>
              <div className='works-card'>
                <div className='flex-wrapper'>
                  <p className='img'>
                    <img src={imgArry[i]} alt='' />
                  </p>
                  <ul>
                    <li>
                      <h4>タイトル</h4>
                      <p>{v.title}</p>
                    </li>
                    <li>
                      <h4>URL</h4>
                      <p>
                        <a href={v.url}>{v.url}</a>
                      </p>
                    </li>
                    <li>
                      <h4>JSフレームワーク</h4>
                      <p>{v.jsFramework}</p>
                    </li>
                    <li>
                      <h4>UIフレームワーク</h4>
                      <p>{v.uiFramework}</p>
                    </li>
                    <li>
                      <h4>JSライブラリ</h4>
                      <p>{v.jsLib}</p>
                    </li>
                    <li>
                      <h4>デプロイ先</h4>
                      <p>{v.build}</p>
                    </li>
                    <li>
                      <h4>マークアップ</h4>
                      <p>{v.mark}</p>
                    </li>
                    <li>
                      <h4>スタイリング</h4>
                      <p>{v.style}</p>
                    </li>
                  </ul>
                </div>

                <div className='description'>
                  <h4>このサイトの特徴</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Works;
