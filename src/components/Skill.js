import React from 'react';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Skill = () => {
  //useRef
  const markupRef = useRef();
  const stylingRef = useRef();
  const jsRef = useRef();
  const otherRef = useRef();

  //gsap用
  useLayoutEffect(() => {
    // -- ANIMATION CODE HERE --
    gsap.fromTo(
      markupRef.current,
      {
        // from
        x: '-10vw',
        opacity: 0,
      },
      {
        //To
        scrollTrigger: {
          trigger: markupRef.current,
          start: 'top 80%',
          // markers: true,
        },
        x: 0,
        opacity: 1,
        duration: 1.2,
      }
    );
    gsap.fromTo(
      stylingRef.current,
      {
        // from
        x: '10vw',
        opacity: 0,
      },
      {
        //To
        scrollTrigger: {
          trigger: stylingRef.current,
          start: 'top 80%',
          // markers: true,
        },
        x: 0,
        opacity: 1,
        duration: 1.2,
      }
    );
    gsap.fromTo(
      jsRef.current,
      {
        // from
        x: '-10vw',
        opacity: 0,
      },
      {
        //To
        scrollTrigger: {
          trigger: jsRef.current,
          start: 'top 80%',
          // markers: true,
        },
        x: 0,
        opacity: 1,
        duration: 1.2,
      }
    );
    gsap.fromTo(
      otherRef.current,
      {
        // from
        x: '10vw',
        opacity: 0,
      },
      {
        //To
        scrollTrigger: {
          trigger: otherRef.current,
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
    <div className='skill-container'>
      {/* マークアップ */}
      <section className='skill-markup' ref={markupRef}>
        <div className='skill-item'>
          <h3>HTML LivingStandard</h3>
          <p>クラスやIDの規則的な記述</p>
          <p>カスタムデータ属性の設定</p>
        </div>
        <div className='skill-item'>
          <h3>WordPress</h3>
          <p>初期設定</p>
          <p>ブロックエディタによる固定・投稿ページ作成</p>
          <p>追加CSSによるカスタマイズ</p>
          <p>Local環境からレンタルサーバー(MySQL)へ移行</p>
        </div>
      </section>

      {/* スタイリング */}
      <section className='skill-styling' ref={stylingRef}>
        <div className='skill-item'>
          <h3>CSS3</h3>
          <p>基本的なCSS全般</p>
          <p>疑似要素before, afterや、nth-child</p>
          <p>flexbox, css grid, position</p>
          <p>セレクタ詳細度</p>
        </div>
        <div className='skill-item'>
          <h3>Dart Sass(Scss)</h3>
          <p>ネスト記述</p>
          <p>@mixinや、変数の使用</p>
          <p>@forward,@useにてインポート</p>
          <p>forによるループ記述</p>
        </div>
        <div className='skill-item'>
          <h3>Bootstrap5</h3>
          <p>container, row, col等の専用クラス使用</p>
          <p>BreakPoint毎のcol記述</p>
        </div>
      </section>

      {/* JavaScript */}
      <section className='skill-js' ref={jsRef}>
        <div className='skill-item'>
          <h3>JavaScript(ES6~)</h3>
          <p>function, アロー関数</p>
          <p>Object, Array</p>
          <p>Class定義, インスタンス化</p>
          <p>Async, Awaitを用いた、非同期通信</p>
          <p>Swiper等のVanillaJSライブラリの使用</p>
        </div>
        <div className='skill-item'>
          <h3>jQuery</h3>
          <p>DOM操作</p>
          <p>Slick等のjQueryライブラリの使用</p>
        </div>
        <div className='skill-item'>
          <h3>Node.js</h3>
          <p>npmを用いた、パッケージ管理</p>
        </div>
        <div className='skill-item'>
          <h3>React.js(18~)</h3>
          <p>関数コンポーネントでのJSX記述</p>
          <p>React Hooks(useState, useRef, useEffect)</p>
          <p>MUI等のReactライブラリの使用</p>
        </div>
        <div className='skill-item'>
          <h3>Next.js</h3>
          <p>Nextルーティングによる、ページ遷移</p>
          <p>画像ファイル等の静的配置</p>
          <p>Vercelへのデプロイ</p>
        </div>
        <div className='skill-item'>
          <h3>GSAP</h3>
          <p>fromTo等のGSAPアニメーション</p>
          <p>ScrollTriger等のGSAPプラグインの使用</p>
        </div>
        <div className='skill-item'>
          <h3>Three.js</h3>
          <p>チュートリアルにて独習中です。</p>
        </div>
      </section>

      {/* その他 */}
      <section className='skill-other' ref={otherRef}>
        <div className='skill-item'>
          <h3>Git, GitHub</h3>
          <p>ローカルリポジトリでのステージング、コミット</p>
          <p>ブランチの切り替え、マージ</p>
          <p>GitHubのクローン、作成したリポジトリのプッシュ</p>
        </div>
        <div className='skill-item'>
          <h3>Figma</h3>
          <p>WEBデザインカンプ制作</p>
        </div>
        <div className='skill-item'>
          <h3>Canva</h3>
          <p>簡単なロゴ制作や、WEB素材の制作、動画編集</p>
        </div>
        <div className='skill-item'>
          <h3>PhotoShop</h3>
          <p>簡単な切り抜きや色調補正、ゴミ取り</p>
        </div>
        <div className='skill-item'>
          <h3>illustrator</h3>
          <p>簡単な名刺データ等の制作</p>
          <p>簡単なWEB素材の制作</p>
        </div>
      </section>
    </div>
  );
};

export default Skill;
