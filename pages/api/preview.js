import { setPreviewData, redirectToPreviewURL } from '@prismicio/next'
import { createClient } from '../../prismicio'

const handler = async (req, res) => {
  const client = createClient({ req })
  await setPreviewData({ req, res })
  await redirectToPreviewURL({ req, res, client })
}

export default handler
