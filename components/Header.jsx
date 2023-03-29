import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'

let scrollThreshold = [0, 750]

export default function Header() {
  let { scrollY } = useScroll()
  let scrollYOnDirectionChange = useRef(scrollY.get())
  let lastPixelsScrolled = useRef()
  let lastScrollDirection = useRef()
  let pixelsScrolled = useMotionValue(0)
  let width = useTransform(pixelsScrolled, scrollThreshold, ['100%', '20%'])
  let opacity = useTransform(pixelsScrolled, [0, 500], [1, 0])

  useEffect(() => {
    return scrollY.onChange(latest => {
      if (latest < 0) return

      let isScrollingDown = scrollY.getPrevious() - latest < 0
      let scrollDirection = isScrollingDown ? 'down' : 'up'
      let currentPixelsScrolled = pixelsScrolled.get()
      let newPixelsScrolled

      if (lastScrollDirection.current !== scrollDirection) {
        lastPixelsScrolled.current = currentPixelsScrolled
        scrollYOnDirectionChange.current = latest
      }

      if (isScrollingDown) {
        newPixelsScrolled = Math.min(
          lastPixelsScrolled.current +
            (latest - scrollYOnDirectionChange.current),
          scrollThreshold[1]
        )
      } else {
        newPixelsScrolled = Math.max(
          lastPixelsScrolled.current -
            (scrollYOnDirectionChange.current - latest),
          scrollThreshold[0]
        )
      }

      pixelsScrolled.set(newPixelsScrolled)
      lastScrollDirection.current = scrollDirection
    })
  }, [pixelsScrolled, scrollY])

  return (
    <header className='fixed inset-x-0 top-0 z-10 bg-transparent text-white'>
      <motion.div className='px-10 py-6' style={{ width, opacity }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          viewBox='0 0 1402 172'
        >
          <path
            fill='currentColor'
            d='M91,68L99,92.2H63.3L71.1,68c3.3-10.4,6.4-18.9,9.7-32.4H81C83.6,47.4,88.1,59.3,91,68z
         M0.5,168.8h37.9l15.2-47.1h55.2l15.4,47.1h38.1L100,3.2H63L0.5,168.8z M179.1,168.8h116.5v-30.1h-81V3.2h-35.5V168.8z
         M350.1,3.2h-35.8v165.7h35.8V3.2z M457.1,171.7c36.5,0,63.9-17.8,76.7-50.4l-36.9-9.7c-4.7,18.9-17.5,32-39.8,32
        c-18.2,0-29.6-5.2-37.2-15.9c-7.1-10.2-9-22.7-9-41.7s3.6-34.3,11.1-44.3c7.6-9.9,19.9-13.3,35.1-13.3
        c22.7,0,35.3,13.5,39.1,34.3l36.5-6.9c-9.2-37.6-39.1-55.6-75.6-55.6c-53.5,0-83.4,35.5-83.4,85.7
        C373.7,141.1,404.5,171.7,457.1,171.7z M590,3.2h-35.8v165.7H590V3.2z M697,68l8.1,24.1h-35.8l7.8-24.1
        c3.3-10.4,6.4-18.9,9.7-32.4h0.2C689.7,47.4,694.2,59.3,697,68L697,68z M606.5,168.8h37.9l15.2-47.1h55.2l15.4,47.1h38.1
        L706,3.2h-36.9L606.5,168.8z M868.5,168.8V77.2l60.9,91.6h43.6l-66.3-96.6l66.3-69.1h-45l-59.4,64.4V3.2h-35.8v165.7H868.5z
         M986.7,168.8h116.5v-28.6h-80.8V99.5h72V70.9h-72v-39h80.8V3.2H986.7V168.8z M1172.4,168.8h35.8v-68.6l57.6-97h-39.6l-19.4,36
        c-4.7,8.8-10.7,21.3-16.1,31.7c-5.9-11.6-12.6-25.8-15.6-31.5l-19.4-36.2h-40.7l57.6,97L1172.4,168.8z M1331.4,171.7
        c34.6,0,70.1-11.4,70.1-51.1c0-35.7-27.9-45.7-63.9-52.1c-23.7-4.3-36.9-9-36.9-21.3c0-13,11.1-19.6,28.2-19.6
        c19.2,0,30.3,9.5,31.3,31.5l36.2-5.7c-4-38.8-31.3-53-67.3-53c-32,0-64.7,14.7-64.7,48.5c0,31.7,25.6,43.3,58.7,50.4
        c25.1,5.4,41.9,6.2,41.9,22.2c0,16.6-14.2,22.7-32.7,22.7c-21.3,0-36-11.1-36-34.3l-36.5,4
        C1261.1,153.9,1293.3,171.7,1331.4,171.7z'
            data-v-21fe422a=''
          ></path>
        </svg>
      </motion.div>
    </header>
  )
}
