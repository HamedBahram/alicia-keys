import { exitPreview } from '@prismicio/next'

const exit = async (req, res) => {
  await exitPreview({ res, req })
}

export default exit
