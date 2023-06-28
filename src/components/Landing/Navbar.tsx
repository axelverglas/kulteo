import ToggleThemes from '../ToggleThemes';

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-10 w-full">
      <div className="container max-w-7xl">
        <nav className="flex h-24 items-center justify-between">
          <svg
            width="200"
            height="50"
            viewBox="0 0 200 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.5619 14.4012L24.3454 19.6176C24.1343 19.8287 23.7921 19.8287 23.581 19.6176L12.4316 8.46826"
              stroke="#E4B589"
              strokeWidth="2.16216"
              strokeLinecap="round"
            />
            <path
              d="M18.3574 7.09773L23.4888 12.2294C23.7004 12.4409 24.0436 12.4404 24.2545 12.2281L35.3278 1.0813"
              stroke="#E4B589"
              strokeWidth="2.16216"
              strokeLinecap="round"
            />
            <path
              d="M34.2497 30.1026L29.0333 24.8862C28.8222 24.6751 28.8222 24.3328 29.0333 24.1218L40.1827 12.9724"
              stroke="#E4B589"
              strokeWidth="2.16216"
              strokeLinecap="round"
            />
            <path
              d="M41.5517 18.8979L36.42 24.0294C36.2085 24.2409 36.209 24.5842 36.4213 24.795L47.5681 35.8683"
              stroke="#E4B589"
              strokeWidth="2.16216"
              strokeLinecap="round"
            />
            <path
              d="M19.084 34.4394L24.3004 29.223C24.5115 29.0119 24.8537 29.0119 25.0648 29.223L36.2141 40.3723"
              stroke="#E4B589"
              strokeWidth="2.16216"
              strokeLinecap="round"
            />
            <path
              d="M30.2926 41.7435L25.1612 36.612C24.9497 36.4004 24.6064 36.4009 24.3956 36.6132L13.3223 47.76"
              stroke="#E4B589"
              strokeWidth="2.16216"
              strokeLinecap="round"
            />
            <path
              d="M14.3997 18.7383L19.6161 23.9547C19.8272 24.1658 19.8272 24.508 19.6161 24.7191L8.4668 35.8684"
              stroke="#E4B589"
              strokeWidth="2.16216"
              strokeLinecap="round"
            />
            <path
              d="M7.09846 29.9428L12.2301 24.8114C12.4417 24.5998 12.4411 24.2566 12.2288 24.0457L1.08203 12.9724"
              stroke="#E4B589"
              strokeWidth="2.16216"
              strokeLinecap="round"
            />
            <path
              d="M57.9824 34.6909V8.8471H64.4235V21.6904H64.5019L75.6565 8.8471H83.3549L72.75 20.5514L84.1008 34.6909H75.7354L68.3511 24.5969L64.4235 28.7209V34.6909H57.9824ZM97.9176 35.0836C90.6905 35.0836 86.0165 31.2738 86.0165 24.6754V8.8471H92.4581V24.4398C92.4581 27.9746 94.8538 29.7421 98.2711 29.7421C101.688 29.7421 104.084 27.9746 104.084 24.4398V8.8471H109.779V24.6754C109.779 31.2738 105.144 35.0836 97.9176 35.0836ZM113.138 34.6909V8.8471H119.579V29.6242H131.362V34.6909H113.138ZM134.688 34.6909V13.9138H127.343V8.8471H148.434V13.9138H141.129V34.6909H134.688ZM150.918 34.6909V8.8471H169.221V13.9138H157.36V19.7266H166.55V23.6542H157.36V29.6242H169.574V34.6909H150.918ZM184.675 35.0836C176.86 35.0836 170.811 30.0955 170.811 21.6512C170.811 13.3639 176.86 8.45435 184.675 8.45435C192.492 8.45435 198.54 13.3639 198.54 21.6512C198.54 30.0955 192.492 35.0836 184.675 35.0836ZM184.675 30.017C188.76 30.017 191.863 26.9142 191.863 21.6904C191.863 16.5452 188.76 13.5209 184.675 13.5209C180.591 13.5209 177.488 16.5452 177.488 21.6904C177.488 26.9142 180.591 30.017 184.675 30.017Z"
              fill="#F4F4F4"
            />
          </svg>
          <ToggleThemes />
        </nav>
      </div>
    </header>
  );
}
