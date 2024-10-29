export function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 36 36"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 9L27 27M9 27L27 9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}