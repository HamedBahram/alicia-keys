import { useRef, useEffect } from 'react'
import { SliceZone } from '@prismicio/react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { createClient } from '../prismicio'
import { components } from '../slices'

gsap.registerPlugin(ScrollTrigger)

export default function Page({ page }) {
  const main = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(self => {
      const boxes = self.selector('.single-media-highlight')
      boxes.forEach((box, i) => {
        gsap.set(box, {
          zIndex: i,
          position: 'sticky',

          transformOrigin: 'center bottom'
        })
        gsap.to(box, {
          '--blurIntensity': '20px',
          y: '100vh',
          bottom: 0,
          ease: 'none',
          duration: 3,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom', // When the bottom of the slice hits the bottom of the viewport
            end: 'bottom top', // When the bottom of the slice hits the top of the viewport
            scrub: true
          }
        })
      })
    }, main) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  return (
    <div ref={main}>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('homepage')

  return {
    props: {
      page
    }
  }
}
