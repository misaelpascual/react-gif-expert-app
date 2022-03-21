import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Prueba en el componente <GifGridItem.test />', () => {
  const title = 'Gif'
  const url = 'https://media0.giphy.com/media/hryis7A55UXZNCUTNA/giphy.gif?cid=0db280a0zvvdt67i7zxo8cd1791yuy9jpb8odjgdoaw5bi66&rid=giphy.gif&ct=g'

  const wrapper = shallow(<GifGridItem title={title} url={url} />)

  test('Debe mostrar <GifGridItem.test /> correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe de tener la imagen al url y alt de los props', () => {
    const img = wrapper.find('img')

    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)
  })

  test('Debe de tener card', () => {
    const div = wrapper.find('div')

    expect(div.hasClass('card')).toBe(true)
  })

})
