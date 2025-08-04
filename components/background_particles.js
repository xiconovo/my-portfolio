import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function BackgroundParticles() {
  const particlesInit = useCallback((engine) => {
    // slim bundle already includes movers + links
    return loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-background"
      init={particlesInit}
      options={particlesOptions}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        backgroundColor: '#02001E',
      }}
    />
  );
}

const particlesOptions = {
  fullScreen: { enable: false },
  detectRetina: true,
  particles: {
    number: {
      value: 90,              // ~60 “anchor” points
      density: { enable: true, area: 900 },
    },
    move: {
      enable: true,
      speed: 0.5,             // gentle drift
      direction: 'none',
      outModes: { default: 'out' },
    },
    // keep the points invisible
    size: { value: 0.5 },
    shape: { type: 'circle' },

    // **the white connector lines**
    links: {
      enable: true,
      distance: 180,          // connect across ~180px gap
      color: '#ffffff',
      opacity: 0.25,          // very subtle
      width: 1,
      blink: true,
    },
  },
  // no interactivity, purely aesthetic
  interactivity: { detectsOn: 'canvas', events: {} },
};