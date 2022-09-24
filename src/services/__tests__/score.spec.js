import api from '../api'
import { get } from '../score.service'

const mockFn = jest.fn()

describe('fetchData', () => {
  it('fetches successfully data from score', async () => {
    const data = {
      data: {
        status: 'OK',
      },
    }

    api.get = mockFn.mockResolvedValueOnce(data)

    await expect(get('123')).resolves.toEqual(data)

    expect(mockFn).toHaveBeenCalledWith('/score/123', { headers: { Authorization: 'Bearer ' } })
  })
})
