
const NavigationLinks = {
  default: '/',
  home: '/home',
  blog: 'blog',
  morseCode: '/morseCode',
  contactMe: '/contact-me',
  aboutWaleed: '/about-waleed',
  simpleResume: '/simple-resume',
  interactiveResume: '/interactive-resume',
  loadingAnimations: '/loading-animations',

  videoPlayer: '/video-player',
  get videoPlayer_ActiveVideo() {
    return `${this.NavigationLinks.videoPlayer}:activeVideo`;
  }
}

export { NavigationLinks } ;
