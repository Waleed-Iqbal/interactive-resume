const AppNavigationLinks = {
  default: "/",
  home: "/home",
  emailSignatures: "/email-signatures",
  morseCode: "/morseCode",
  contactMe: "/contact-me",
  aboutWaleed: "/about-waleed",
  simpleResume: "/simple-resume",
  interactiveResume: "/interactive-resume",
  loadingAnimations: "/loading-animations",
  EmailSignatures: "/email-signatures",

  videoPlayer: "/video-player",
  get videoPlayer_ActiveVideo() {
    return `${this.AppNavigationLinks.videoPlayer}:activeVideo`;
  },
};

const HomePage = {
  pageTitle: "Hire Waleed",
  greetings: [
    "Hi",
    "你好",
    "Hola",
    "(Bella) Ciao",
    "Bonjour",
    "مرحبا",
    "こんにちは",
    "Namaste",
    "Привет",
    "こんにちは",
  ],
  heroHeading: "I am Waleed",
  heroSubheading:
    "Expert front-end developer specializing in UI/UX, animations. Armed with extensive experience in developing single page applications, landing pages, email templates and email signatures.",
};

const AboutPage = {
  pageTitle: "About Waleed",
};

const SimpleResumePage = {
  pageTitle: "Resume",
  emailId: "ikhawajawaleed@gmail.com",
  linkedInProfile: "https://www.linkedin.com/in/kwaleediqbal",
};

const LoadingAnimationsPage = {
  pageTitle: "Loaders",
};

const VideoPlayerPage = {
  pageTitle: "Video Player",
};

const PageNotFound = {
  pageTitle: "Page Not Found",
};

const PageTitles = {
  homePage: HomePage.pageTitle,
  about: AboutPage.pageTitle,
  pageNotFound: PageNotFound.pageTitle,
  simpleResume: SimpleResumePage.pageTitle,
  videoPlayer: VideoPlayerPage.pageTitle,
  loadingAnimationsPage: LoadingAnimationsPage.pageTitle,
};

export {
  HomePage,
  PageTitles,
  AboutPage,
  PageNotFound,
  SimpleResumePage,
  VideoPlayerPage,
  AppNavigationLinks,
  LoadingAnimationsPage,
};
