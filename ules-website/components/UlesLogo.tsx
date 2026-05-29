interface UlesLogoProps {
  size?: number
  className?: string
}

export default function UlesLogo({ size = 32, className }: UlesLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="100" height="100" rx="22" fill="#4BBDE8" />
      <circle cx="37" cy="35" r="6" fill="white" />
      <circle cx="63" cy="35" r="6" fill="white" />
      <path
        d="M30 47 L30 60 Q30 75 50 75 Q70 75 70 60 L70 47"
        stroke="white"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
