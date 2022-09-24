/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
// src/mocks/server.js
import { setupServer } from 'msw/node'
import Resolvers from './resolvers'

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...Resolvers)
