import { calcRatio } from './helpers';

export const box = (ratio, color) => ({
  backgroundColor: color,
  paddingBottom: `${calcRatio(ratio)}%`,
  position: 'relative',
  width: '100%',
});

export const thumbnail = (blur, loaded = false) => {
  let style = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    filter: `blur(${blur}px)`,
    display: 'block',
    opacity: '0',
    transition: 'opacity 1s linear',
  };

  if (loaded) style = Object.assign(style, { opacity: '1' });

  return style;
};

export const image = (loaded = false) => {
  let style = {
    position: 'absolute',
    width: '100%',
    display: 'block',
    opacity: '0',
    transition: 'opacity 1s linear',
  };

  if (loaded) style = Object.assign(style, { opacity: '1' });

  return style;
};
