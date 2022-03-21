import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {

  test('Debe retornar el estado inicial', async () => {

    // const { data, loading } = useFetchGifs('Gatos')
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Gatos'))
    const { data, loading } = result.current

    await waitForNextUpdate()

    expect(data).toEqual([])
    expect(loading).toBe(true)

  })

  test('Debe de retornar un arreglo de imagenes y el loading en false', async () => {

    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Perros'))
    await waitForNextUpdate()

    const { data, loading } = result.current

    expect(data.length).toBe(16)
    expect(loading).toBe(false)

  })

})
