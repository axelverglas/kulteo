interface IconProps {
  selected?: boolean;
  className?: string;
}

export function MuseumsIcon({ ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 36 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M33.1534 13.1667H2.8457C2.29342 13.1667 1.8457 12.7189 1.8457 12.1667V10.195C1.8457 9.81618 2.05971 9.46992 2.39849 9.30052L17.5523 1.72361C17.8339 1.58284 18.1652 1.58284 18.4468 1.72361L33.6006 9.30052C33.9394 9.46992 34.1534 9.81618 34.1534 10.195V12.1667C34.1534 12.7189 33.7057 13.1667 33.1534 13.1667Z"
        strokeWidth="2"
      />
      <path
        d="M33.1534 36.5H2.8457C2.29342 36.5 1.8457 36.0523 1.8457 35.5V33.9103C1.8457 33.358 2.29342 32.9103 2.8457 32.9103H17.8488H33.1534C33.7057 32.9103 34.1534 33.358 34.1534 33.9103V35.5C34.1534 36.0523 33.7057 36.5 33.1534 36.5Z"
        strokeWidth="2"
      />
      <path
        d="M7.23047 17.6539V27.9744"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M17.999 17.6539V27.9744" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M28.7695 17.6539V27.9744"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon({ ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8.87902 8.87902C9.15728 8.60036 9.48774 8.3793 9.85151 8.22847C10.2153 8.07764 10.6052 8 10.999 8C11.3928 8 11.7828 8.07764 12.1465 8.22847C12.5103 8.3793 12.8408 8.60036 13.119 8.87902L23.999 19.755L34.879 8.87902C35.1574 8.60062 35.4879 8.37977 35.8517 8.2291C36.2154 8.07843 36.6053 8.00089 36.999 8.00089C37.3927 8.00089 37.7826 8.07843 38.1464 8.2291C38.5101 8.37977 38.8406 8.60062 39.119 8.87902C39.3974 9.15742 39.6183 9.48793 39.7689 9.85168C39.9196 10.2154 39.9972 10.6053 39.9972 10.999C39.9972 11.3927 39.9196 11.7826 39.7689 12.1464C39.6183 12.5101 39.3974 12.8406 39.119 13.119L28.243 23.999L39.119 34.879C39.6813 35.4413 39.9972 36.2039 39.9972 36.999C39.9972 37.7942 39.6813 38.5568 39.119 39.119C38.5568 39.6813 37.7942 39.9972 36.999 39.9972C36.2039 39.9972 35.4413 39.6813 34.879 39.119L23.999 28.243L13.119 39.119C12.5568 39.6813 11.7942 39.9972 10.999 39.9972C10.2039 39.9972 9.44128 39.6813 8.87902 39.119C8.31676 38.5568 8.00089 37.7942 8.00089 36.999C8.00089 36.2039 8.31676 35.4413 8.87902 34.879L19.755 23.999L8.87902 13.119C8.60036 12.8408 8.3793 12.5103 8.22847 12.1465C8.07764 11.7828 8 11.3928 8 10.999C8 10.6052 8.07764 10.2153 8.22847 9.85151C8.3793 9.48774 8.60036 9.15728 8.87902 8.87902Z" />
    </svg>
  );
}

export function SunIcon({ selected, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        className={
          selected
            ? 'stroke-secondarylight dark:stroke-primary'
            : 'stroke-night dark:stroke-whitesmoke'
        }
      />
      <path
        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
        className={
          selected
            ? 'stroke-secondarylight dark:stroke-primary'
            : 'stroke-night dark:stroke-whitesmoke'
        }
      />
    </svg>
  );
}

export function MoonIcon({ selected, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
        className={
          selected
            ? 'stroke-secondarylight dark:stroke-primary'
            : 'fill-transparent'
        }
      />
      <path
        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
        className={
          selected
            ? 'fill-secondarylight dark:fill-primary'
            : 'fill-night dark:fill-whitesmoke'
        }
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
        className={
          selected
            ? 'fill-secondarylight dark:fill-primary'
            : 'fill-night dark:fill-whitesmoke'
        }
      />
    </svg>
  );
}

export function PcIcon({ selected, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
        strokeWidth="2"
        strokeLinejoin="round"
        className={
          selected
            ? 'stroke-secondarylight dark:stroke-primary'
            : 'stroke-night dark:stroke-whitesmoke'
        }
      />
      <path
        d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={
          selected
            ? 'stroke-secondarylight dark:stroke-primary'
            : 'stroke-night dark:stroke-whitesmoke'
        }
      />
    </svg>
  );
}

export function HomeIcon({ ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 19 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.72604 2C6.89326 5.54042 15.1151 14.0308 16.1469 15.4536C21.1109 22.2984 -4.26034 20.8823 2.72604 14.7455C13.7481 5.0639 16.8823 2 17.25 2"
        strokeWidth="2.57143"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ContactIcon({ ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30.5626 24.5078C29.4175 23.354 26.6441 21.6701 25.2984 20.9916C23.5461 20.1089 23.4019 20.0368 22.0245 21.0601C21.1058 21.743 20.495 22.353 19.4199 22.1237C18.3447 21.8944 16.0082 20.6014 13.9624 18.5621C11.9166 16.5228 10.5486 14.1185 10.3186 13.047C10.0885 11.9754 10.7087 11.3718 11.3851 10.4509C12.3384 9.15289 12.2663 8.93656 11.4514 7.18423C10.8161 5.82131 9.08328 3.07383 7.92515 1.93445C6.68626 0.710708 6.68626 0.927044 5.88798 1.25876C5.23808 1.5322 4.61459 1.86459 4.02532 2.25175C2.87152 3.0183 2.23117 3.65505 1.78335 4.61198C1.33553 5.56891 1.13434 7.81233 3.44698 12.0136C5.75962 16.2148 7.38215 18.3631 10.7404 21.712C14.0987 25.0609 16.681 26.8615 20.4561 28.9787C25.1261 31.5942 26.9174 31.0844 27.8772 30.6373C28.837 30.1902 29.4766 29.5556 30.2446 28.4018C30.6328 27.8135 30.9659 27.1907 31.2398 26.5413C31.5722 25.7459 31.7886 25.7459 30.5626 24.5078Z"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

export function ShareIcon({ ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 28 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.91447 15.1955C8.91447 17.1974 7.29163 18.8202 5.28975 18.8202C3.28788 18.8202 1.66504 17.1974 1.66504 15.1955C1.66504 13.1936 3.28788 11.5708 5.28975 11.5708C7.29163 11.5708 8.91447 13.1936 8.91447 15.1955Z"
        strokeWidth="2"
      />
      <path
        d="M26.0922 4.62471C26.0922 6.62659 24.4694 8.24943 22.4675 8.24943C20.4656 8.24943 18.8428 6.62659 18.8428 4.62471C18.8428 2.62284 20.4656 1 22.4675 1C24.4694 1 26.0922 2.62284 26.0922 4.62471Z"
        strokeWidth="2"
      />
      <line
        x1="7.85059"
        y1="13.2778"
        x2="20.2283"
        y2="6.1315"
        strokeWidth="2"
      />
      <path
        d="M26.0922 4.62471C26.0922 6.62659 24.4694 8.24943 22.4675 8.24943C20.4656 8.24943 18.8428 6.62659 18.8428 4.62471C18.8428 2.62284 20.4656 1 22.4675 1C24.4694 1 26.0922 2.62284 26.0922 4.62471Z"
        strokeWidth="2"
      />
      <line
        x1="7.85059"
        y1="13.2778"
        x2="20.2283"
        y2="6.1315"
        strokeWidth="2"
      />
      <path
        d="M26.3344 25.3753C26.3344 23.3734 24.7116 21.7506 22.7097 21.7506C20.7078 21.7506 19.085 23.3734 19.085 25.3753C19.085 27.3772 20.7078 29 22.7097 29C24.7116 29 26.3344 27.3772 26.3344 25.3753Z"
        strokeWidth="2"
      />
      <line
        y1="-1"
        x2="14.2926"
        y2="-1"
        transform="matrix(0.866025 0.5 0.5 -0.866025 8.59277 15.8562)"
        strokeWidth="2"
      />
    </svg>
  );
}

export function LocationIcon({ ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 22 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 11.9091C21 18.0091 15.2098 26.162 11.7237 30.1867C11.3397 30.6301 10.6603 30.6301 10.2763 30.1867C6.79016 26.162 1 18.0091 1 11.9091C1 3.72727 7.15385 1 11 1C14.8462 1 21 3.72727 21 11.9091Z"
        strokeWidth="2"
      />
      <circle cx="11" cy="11" r="5" strokeWidth="2" />
    </svg>
  );
}

export function BookMarkIcon({ ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 29 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M24.1934 8.74194V1.00001" strokeWidth="2" />
      <path
        d="M24.1936 11.6452V26.051C24.1936 28.3038 21.8032 29.7529 19.8059 28.7108L14.4523 25.9176C13.5828 25.4639 12.5464 25.4639 11.6769 25.9176L6.32324 28.7108C4.32595 29.7529 1.93555 28.3038 1.93555 26.051V4.96777C1.93555 3.31092 3.27869 1.96777 4.93555 1.96777H13.0646"
        strokeWidth="2"
      />
      <path d="M20.3223 4.87085H28.0642" strokeWidth="2" />
    </svg>
  );
}

export function ArrowLeftIcon({ ...props }: IconProps) {
  return (
    <svg
      width="12"
      height="22"
      viewBox="0 0 12 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.5 20.5L1 11L10.5 1.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
