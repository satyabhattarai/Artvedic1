import { useRouter } from 'next/router'
import React from 'react'

{/* dynamic routing */}

const [slug] = () => {
const router= useRouter()
  return (
    <div>[slug]</div>
  )
}

export default [slug]