import { afterEach, beforeAll, afterAll } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { server } from '../config/msw/init'

beforeAll(() => {
  server.listen()
})

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  server.resetHandlers();
  cleanup();
})

afterAll(() => {
  server.close();
})