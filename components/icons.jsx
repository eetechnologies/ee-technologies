function base(children, props) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconWiring(props) {
  return base(
    <>
      <path d="M8 32V16a6 6 0 0 1 6-6h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M32 8v16a6 6 0 0 1-6 6h-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="18" cy="10" r="2.4" fill="currentColor" />
      <circle cx="22" cy="30" r="2.4" fill="currentColor" />
      <path d="M14 20h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="1 4" />
    </>,
    props
  );
}

export function IconSolarPanel(props) {
  return base(
    <>
      <path d="M6 16 12 8h16l6 8-4 16H10L6 16Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9.5 16h21M13 24h14M14.5 8 10 32M25.5 8 30 32" stroke="currentColor" strokeWidth="1.2" />
    </>,
    props
  );
}

export function IconBoard(props) {
  return base(
    <>
      <rect x="7" y="7" width="26" height="26" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 7v-3M20 7v-3M27 7v-3M13 36v-3M20 36v-3M27 36v-3M7 13H4M7 20H4M7 27H4M33 13h3M33 20h3M33 27h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="14" y="14" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
    </>,
    props
  );
}

export function IconWrench(props) {
  return base(
    <>
      <path
        d="M26.6 9.4a7 7 0 0 0-9.6 9.6L7 29l3.9 3.9 10-10a7 7 0 0 0 9.6-9.6l-4.6 4.6-4-4 4.7-4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </>,
    props
  );
}

export function IconBattery(props) {
  return base(
    <>
      <rect x="6" y="13" width="24" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M31 17v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M19 16l-4 5h4l-3 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </>,
    props
  );
}

export function IconMeter(props) {
  return base(
    <>
      <circle cx="20" cy="21" r="12" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 21 25 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13 21h1M26 21h1M20 14v1M16 15.5l.6.9M24 15.5l-.6.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M14 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>,
    props
  );
}

export function IconPhone(props) {
  return base(
    <>
      <path
        d="M11 6h5l2 6-3 2.5a16 16 0 0 0 7.5 7.5L25 19l6 2v5a3 3 0 0 1-3 3C17.5 29 8 19.5 8 9a3 3 0 0 1 3-3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </>,
    props
  );
}

export function IconFacebook(props) {
  return base(
    <>
      <path
        d="M24.8 10.4h-3.2a4.8 4.8 0 0 0-4.8 4.8v3.2h-3.2v4.8h3.2v12.8h4.8v-12.8h3.84l.8-4.8h-4.8v-2.4a1.6 1.6 0 0 1 1.6-1.6h2.4V10.4Z"
        fill="currentColor"
      />
    </>,
    props
  );
}

export function IconShield(props) {
  return base(
    <>
      <path d="M20 5 33 10v9c0 8-5.5 13.5-13 16-7.5-2.5-13-8-13-16v-9L20 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14.5 20l4 4 7-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>,
    props
  );
}
