import './style.scss';

const video = document.querySelector('.bg-video');
const preloader = document.querySelector('.preloader');

const plaBgVideo = () => {
  video.src = './videos/bg-video.mp4';
  video.playbackRate = 1;
  video.muted = true;
  video.play();
};

window.addEventListener('load', () => {
  plaBgVideo();
  preloader.style.display = 'none';
});

video.addEventListener('ended', plaBgVideo);
