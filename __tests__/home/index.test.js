import renderer from 'react-test-renderer'
import '../../resources/push/lib/match-media.js'
import utils from '../../resources/push/lib/utils.js'
import ajax from '../../resources/push/components/ajax/index.js'
import Home from '../../resources/push/js/home/index.js'

describe('Test utils工具函数', () => {
  test('获取url的参数id=4', () => {
    expect(utils.queryString('id', 'http://www.meizu.com?id=4')).toBe('4')
  })
})
test('get', () => {
  const component = renderer.create(<Home />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
