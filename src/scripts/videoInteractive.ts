export default function loadVideo() {
  const videoContainer = <HTMLDivElement>document.querySelector('.video-container');

  videoContainer.addEventListener('click', () => {
    videoContainer.innerHTML = '<iframe src="https://www.youtube.com/embed/vwlO8ejMviQ?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  }, { passive: true });
}
