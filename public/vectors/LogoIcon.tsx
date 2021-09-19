/* eslint-disable no-use-before-define */
import * as React from 'react'

function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={41} height={19} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2.78 14c.32 0 .5-.2.5-.52V.58c0-.34-.18-.52-.5-.52H.6C.28.06.1.24.1.58v12.9c0 .34.18.52.5.52h2.18zm7.611.2c3.14 0 5.4-2.18 5.4-5.18 0-2.98-2.26-5.16-5.4-5.16-3.14 0-5.42 2.18-5.42 5.16 0 3 2.28 5.18 5.42 5.18zm0-2.78c-1.26 0-2.16-1-2.16-2.4 0-1.38.9-2.38 2.16-2.38 1.24 0 2.14 1 2.14 2.38 0 1.4-.9 2.4-2.14 2.4zm14.672-7.36a.53.53 0 00-.52.52v.68c-.78-.88-1.88-1.4-3.18-1.4-2.54 0-4.38 2.02-4.38 4.8 0 2.82 1.84 4.82 4.38 4.82 1.3 0 2.4-.52 3.18-1.4v1.44c0 1.24-.9 2.14-2.14 2.14-.84 0-1.6-.42-1.9-1.06-.08-.16-.2-.28-.44-.28l-1.94-.02c-.36 0-.64.28-.54.64.6 1.94 2.56 3.26 4.96 3.26 3.02 0 5.2-2.06 5.2-4.88V4.58c0-.28-.24-.52-.54-.52h-2.14zm-2.66 7c-1.24 0-2.16-1-2.16-2.38 0-1.4.92-2.4 2.16-2.4 1.24 0 2.14 1 2.14 2.4 0 1.38-.9 2.38-2.14 2.38zm12.441 3.14c3.14 0 5.4-2.18 5.4-5.18 0-2.98-2.26-5.16-5.4-5.16-3.14 0-5.42 2.18-5.42 5.16 0 3 2.28 5.18 5.42 5.18zm0-2.78c-1.26 0-2.16-1-2.16-2.4 0-1.38.9-2.38 2.16-2.38 1.24 0 2.14 1 2.14 2.38 0 1.4-.9 2.4-2.14 2.4z"
        fill="#2E2E2E"
      />
    </svg>
  )
}

export default LogoIcon
