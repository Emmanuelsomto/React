function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-8 h-8 md:w-10 md:h-10 text-slate-700 hover:text-slate-800"
    >
      <path d="M12 2.06c-5.5 0-10 4.5-10 10 0 4.94 3.61 9.06 8.33 9.89l.06-.05h-.06v-7.06h-2.5v-2.78h2.5V9.84c0-2.5 1.61-3.89 3.89-3.89.72 0 1.5.11 2.22.22v2.56h-1.28c-1.22 0-1.5.61-1.5 1.39v1.94h2.67l-.44 2.78h-2.22v7.06h-.06l.06.05c4.72-.83 8.33-4.94 8.33-9.89 0-5.5-4.5-10-10-10"></path>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-8 h-8 md:w-10 md:h-10 text-slate-700 hover:text-slate-800"
    >
      <path d="M13.68 10.62 20.24 3h-1.55L13 9.62 8.45 3H3.19l6.88 10.01L3.19 21h1.55l6.01-6.99 4.8 6.99h5.24l-7.13-10.38Zm-2.13 2.47-.7-1-5.54-7.93H7.7l4.47 6.4.7 1 5.82 8.32H16.3z"></path>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-9 h-9 md:w-10 md:h-10 text-slate-700 hover:text-slate-800"
    >
      <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008m4.807-8.875a1.078 1.078 0 1 0 0 2.156 1.078 1.078 0 1 0 0-2.156"></path>
      <path d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632 6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419 4.6 4.6 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688 3 3 0 0 1-1.712 1.711 5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311 3 3 0 0 1-1.719-1.711 5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311 3 3 0 0 1 1.712 1.712 5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z"></path>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-10 h-10 md:w-11 md:h-11 text-slate-600 hover:text-slate-800"
    >
      <path d="M21.593 7.203a2.5 2.5 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.52 2.52 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831M9.996 15.005l.005-6 5.207 3.005z"></path>
    </svg>
  );
}

const Icons = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
};

function SocialIcon({ name, href }) {
  const IconComponent = Icons[name];

  if (!IconComponent) return null;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
      <IconComponent />
    </a>
  );
}

export default SocialIcon;
