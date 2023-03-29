import RichText from '@/components/RichText'
import { getThemeClassNames } from '@/lib'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicLink } from '@prismicio/react'
import clsx from 'clsx'

/**
 * @typedef {import("@prismicio/client").Content.SingleMediaHighlightSlice} SingleMediaHighlightSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SingleMediaHighlightSlice>} SingleMediaHighlightProps
 * @param { SingleMediaHighlightProps }
 */
const SingleMediaHighlight = ({ slice }) => {
  return (
    <PrismicLink field={slice.primary.link} target='_blank' className='z-10'>
      <div
        className={clsx(getThemeClassNames(slice.primary.theme), 'p-10')}
        {...(slice.variation === 'fullWidthImage'
          ? {
              style: {
                backgroundImage: `url(${slice.primary.image.url})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                aspectRatio: `${slice.primary.image.dimensions.width} / ${slice.primary.image.dimensions.height}`
              }
            }
          : {})}
      >
        <span className='sr-only'>{slice.primary.image.alt}</span>
        <RichText
          field={slice.primary.title}
          className='max-w-lg text-4xl font-bold uppercase'
        />
        <RichText
          field={slice.primary.description}
          className='mt-1 text-lg font-semibold uppercase'
        />

        {slice.variation !== 'fullWidthImage' ? (
          <div className='p-24'>
            <div className='relative'>
              <PrismicNextImage
                field={slice?.primary?.image}
                className='object-cover'
              />
            </div>
          </div>
        ) : null}
      </div>
    </PrismicLink>
  )
}

export default SingleMediaHighlight
