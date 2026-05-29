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
      <circle cx="37" cy="36" r="6.5" fill="white" />
      <circle cx="63" cy="36" r="6.5" fill="white" />
      <path
        d="M28 48 L28 60 Q28 76 50 76 Q72 76 72 60 L72 48"
        stroke="white"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
