import RichText from '@/components/RichText'
import { PrismicNextImage } from '@prismicio/next'

const Hero = ({ slice }) => {
  return (
    <section className='relative h-[75vh] bg-black'>
      {/* <div className='absolute inset-0'> */}
      <PrismicNextImage
        field={slice?.primary?.image}
        className='object-cover'
        fill
      />
      {/* </div> */}
      <div className='absolute bottom-1/3 px-4 md:px-6 lg:px-8'>
        <RichText
          field={slice.primary.title}
          className='text-4xl font-bold uppercase text-white'
        />
        <RichText
          field={slice.primary.description}
          className='mt-2 text-lg font-semibold uppercase text-white'
        />
      </div>
    </section>
  )
}

export default Hero
