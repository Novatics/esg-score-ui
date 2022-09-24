/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import { setupWorker } from 'msw'
import resolvers from './resolvers'

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...resolvers)
