import { handler } from './get'

describe('Controllers - users - get', () => {
    it('should not crash', async () => {
        const event = {}

        await handler(event)
    })
})