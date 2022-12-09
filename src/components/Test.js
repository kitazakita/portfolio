import React from 'react';
import { useSpring, animated } from 'react-spring';

const Test = () => {
  const [props, setProps] = useSpring(() => {
    return {
      fontSize: '24px',
      color: 'green',
    };
  });
  return (
    <animated.div
      style={props}
      onMouseEnter={(e) => setProps({ fontSize: '48px', color: 'red' })}
      onMouseLeave={(e) => setProps({ fontSize: '24px', color: 'green' })}
    ></animated.div>
  );
};

export default Test;
