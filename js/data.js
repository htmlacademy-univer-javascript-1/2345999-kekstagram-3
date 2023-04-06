import { randomValue } from './util.js'
function generatePhotosInfo () {
  const photos = []
  for (let i = 1; i <= 25; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: `Фотография №${i}. Описание придумайте самостоятельно.`,
      likes: randomValue(15, 200),
      comments: randomValue(0, 200)
    })
  }
  return photos
}
export { generatePhotosInfo }
