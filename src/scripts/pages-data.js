
const AppNavigationLinks = {
  default: '/',
  home: '/home',
  emailSignatures: '/email-signatures',
  morseCode: '/morseCode',
  contactMe: '/contact-me',
  aboutWaleed: '/about-waleed',
  simpleResume: '/simple-resume',
  interactiveResume: '/interactive-resume',
  loadingAnimations: '/loading-animations',
  EmailSignatures: '/email-signatures',

  videoPlayer: '/video-player',
  get videoPlayer_ActiveVideo() {
    return `${this.AppNavigationLinks.videoPlayer}:activeVideo`;
  }
}

const HomePage = {
  pageTitle: 'Hire Waleed',
  greetings: ['Hi', 'Ni Hau', 'Hola', 'Bonjour', 'Salam', 'Marhaba', 'Guten Tag', 'Namaste', 'Konnichiwa'],
}

const AboutPage = {
  pageTitle: 'About Waleed',
}

const SimpleResumePage = {
  pageTitle: 'Resume',

}

const LoadingAnimationsPage = {
  pageTitle: 'Loaders',
}

const VideoPlayerPage = {
  pageTitle: 'Video Player',
}

const PageNotFound = {
  pageTitle: 'Page Not Found'
}

const PageTitles = {
  homePage: HomePage.pageTitle,
  about: AboutPage.pageTitle,
  pageNotFound: PageNotFound.pageTitle,
  simpleResume: SimpleResumePage.pageTitle,
  videoPlayer: VideoPlayerPage.pageTitle,
  loadingAnimationsPage: LoadingAnimationsPage.pageTitle,
}

export {
  HomePage,
  PageTitles,
  AboutPage,
  PageNotFound,
  SimpleResumePage,
  VideoPlayerPage,
  AppNavigationLinks,
  LoadingAnimationsPage,
} ;
