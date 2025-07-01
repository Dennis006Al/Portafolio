// src/components/icons/FileText.tsx
import type { SVGProps } from 'react';

export default function FileText(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 4h7v5h5v11H6V4zm8 11h-2v2h2v-2zm-4 0H8v2h2v-2zm4-4h-2v2h2v-2zm-4 0H8v2h2v-2zm0-4H8v2h2V7z"
      />
    </svg>
  );
}
