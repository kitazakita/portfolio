import React from 'react';
import data from './works.json';

const Works = () => {
  return (
    <section id="works">
      <h2 className="section-sub-title">Works</h2>

      {data.data.map((v, i) => {
        console.log(v);
        return (
          <div key={i}>
            <ul>
              <li>
                <h4>タイトル</h4>
                <p>{v.title}</p>
              </li>
              <li>
                <h4>サイトURL</h4>
                <p>{v.url}</p>
              </li>
              <li>
                <h4>JS/WEBフレームワーク</h4>
                <p>{v.jsFramework}</p>
              </li>
              <li>
                <h4>UIフレームワーク</h4>
                <p>{v.uiFramework}</p>
              </li>
              <li>
                <h4>マークアップ記述</h4>
                <p>{v.mark}</p>
              </li>
              <li>
                <h4>スタイリング記述</h4>
                <p>{v.style}</p>
              </li>
              <li>
                <h4>JSライブラリ</h4>
                <p>{v.jsLib}</p>
              </li>
              <li>
                <h4>デプロイ先</h4>
                <p>{v.build}</p>
              </li>
            </ul>

            <div>
              <h4>このサイトの特徴</h4>
              <p>{v.desc}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Works;
