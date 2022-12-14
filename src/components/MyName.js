import React, { useRef, useLayoutEffect } from 'react';

const MyName = (props) => {
  const gsap = props.gsap;
  gsap.registerPlugin(props.ScrollTrigger);

  const myName = 'Kitazaki Takanori';
  const splitNameArry = myName.split(''); //length17

  const textRef1 = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();
  const textRef4 = useRef();
  const textRef5 = useRef();
  const textRef6 = useRef();
  const textRef7 = useRef();
  const textRef8 = useRef();
  const textRef9 = useRef(); //空白&nbsp;
  const textRef10 = useRef();
  const textRef11 = useRef();
  const textRef12 = useRef();
  const textRef13 = useRef();
  const textRef14 = useRef();
  const textRef15 = useRef();
  const textRef16 = useRef();
  const textRef17 = useRef();

  const firstDelayTime = 1;
  const durationTime = 0.1;

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      textRef1.current,
      { y: '-14vh', opacity: 0 },
      { duration: durationTime, delay: firstDelayTime, y: 0, opacity: 1 }
    );
    tl.fromTo(
      textRef2.current,
      { y: '-14vh', opacity: 0 },
      { duration: durationTime, y: 0, opacity: 1 }
    );
    tl.fromTo(
      textRef3.current,
      { y: '-14vh', opacity: 0 },
      { duration: durationTime, y: 0, opacity: 1 }
    );
    tl.fromTo(
      textRef4.current,
      { y: '-14vh', opacity: 0 },
      { duration: durationTime, y: 0, opacity: 1 }
    );
    tl.fromTo(
      textRef5.current,
      { y: '-14vh', opacity: 0 },
      { duration: durationTime, y: 0, opacity: 1 }
    );
    tl.fromTo(
      textRef6.current,
      { y: '-14vh', opacity: 0 },
      { duration: durationTime, y: 0, opacity: 1 }
    );
    tl.fromTo(
      textRef7.current,
      { y: '-14vh', opacity: 0 },
      { duration: durationTime, y: 0, opacity: 1 }
    );
    tl.fromTo(
      textRef8.current,
      { y: '-14vh', opacity: 0 },
      { duration: durationTime, y: 0, opacity: 1 }
    );
    tl.fromTo(
      textRef9.current,
      { y: '-14vh', opacity: 0 },
      { duration: 0, y: 0, opacity: 1 }
    );
    tl.fromTo(
      textRef10.current,
      { y: '-14vh', opacity: 0 },
      { duration: durationTime, y: 0, opacity: 1 }
    );
    tl.fromTo(
      textRef11.current,
      { y: '-14vh', opacity: 0 },
      { duration: durationTime, y: 0, opacity: 1 }
    );
    tl.fromTo(
      textRef12.current,
      { y: '-14vh', opacity: 0 },
      { duration: durationTime, y: 0, opacity: 1 }
    );
    tl.fromTo(
      textRef13.current,
      { y: '-14vh', opacity: 0 },
      { duration: durationTime, y: 0, opacity: 1 }
    );
    tl.fromTo(
      textRef14.current,
      { y: '-14vh', opacity: 0 },
      { duration: durationTime, y: 0, opacity: 1 }
    );
    tl.fromTo(
      textRef15.current,
      { y: '-14vh', opacity: 0 },
      { duration: durationTime, y: 0, opacity: 1 }
    );
    tl.fromTo(
      textRef16.current,
      { y: '-14vh', opacity: 0 },
      { duration: durationTime, y: 0, opacity: 1 }
    );
    tl.fromTo(
      textRef17.current,
      { y: '-14vh', opacity: 0 },
      { duration: durationTime, y: 0, opacity: 1 }
    );
    return () => {
      // cleanup code (optional)
    };
  }, []);

  return (
    <>
      <h1 className='page-title-name'>
        <span ref={textRef1}>{splitNameArry[0]}</span>
        <span ref={textRef2}>{splitNameArry[1]}</span>
        <span ref={textRef3}>{splitNameArry[2]}</span>
        <span ref={textRef4}>{splitNameArry[3]}</span>
        <span ref={textRef5}>{splitNameArry[4]}</span>
        <span ref={textRef6}>{splitNameArry[5]}</span>
        <span ref={textRef7}>{splitNameArry[6]}</span>
        <span ref={textRef8}>{splitNameArry[7]}</span>
        <span ref={textRef9}>&nbsp;</span>
        <span ref={textRef10}>{splitNameArry[9]}</span>
        <span ref={textRef11}>{splitNameArry[10]}</span>
        <span ref={textRef12}>{splitNameArry[11]}</span>
        <span ref={textRef13}>{splitNameArry[12]}</span>
        <span ref={textRef14}>{splitNameArry[13]}</span>
        <span ref={textRef15}>{splitNameArry[14]}</span>
        <span ref={textRef16}>{splitNameArry[15]}</span>
        <span ref={textRef17}>{splitNameArry[16]}</span>
      </h1>
    </>
  );
};

export default MyName;
