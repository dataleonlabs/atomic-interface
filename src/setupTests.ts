import * as enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// const fetchMock = require('jest-fetch-mock')

// Object.defineProperty(window, 'fetch', {
//   value: fetchMock,
// })

// global.fetch = require('jest-fetch-mock')

const localStorageMock = (() => {
  let store = {}

  return {
    getItem: (key: string) => {
      return store[key] || null
    },
    setItem: (key: string, value: string) => {
      store[key] = value.toString()
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

const createRangeMock = () => {
  return {
    setEnd: jest.fn(),
    setStart: jest.fn(),
    getBoundingClientRect: jest.fn(),
  }
}

Object.defineProperty(window.document, 'createRange', {
  value: createRangeMock,
})

enzyme.configure({ adapter: new Adapter() })
