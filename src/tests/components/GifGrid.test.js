import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el componente <GifGrid />', () => {

  const category = 'Cats'

  test('Debe mostrar <GifGrid /> correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })

    const wrapper = shallow(<GifGrid category={category} />)

    expect(wrapper).toMatchSnapshot()
  })


  test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
    const gifs = [{
        id: 1,
        url: 'https://example.com/test/img.gif',
        title: 'Titulo'
    }]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })

    const wrapper = shallow(<GifGrid category={category} />)

    expect(wrapper).toMatchSnapshot()

    // Validamos que no exista la palabra loading en un parrafo
    // expect(wrapper.find('p').exists()).toBe(false)

    // Validamos que no exista el componente LoadingBase
    expect(wrapper.find('LoadingBase').exists()).toBe(false)
    // Validamos que exista el GifGridItem
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })

})