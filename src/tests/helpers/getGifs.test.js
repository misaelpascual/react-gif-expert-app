import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs Fetch', () => {

  test('Debe traer 16 elementos', async () => {
    const gifs = await getGifs('kitties')

    expect(gifs.length).toBe(16)
  })

  test('Debe traer un array vacio cuando no se le mandan argumentos', async () => {
    const gifs = await getGifs('')

    expect(gifs.length).toBe(0)
  })

})