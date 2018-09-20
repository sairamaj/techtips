import { Context, HttpMethod, HttpRequest, HttpStatusCode } from 'azure-functions-ts-essentials';
import { run } from './index';

/*
describe('@azure-seed/azure-functions-typescript', () => {
    describe('GET /api/techtips', () => {
        console.log('doing api/techtips')
        it('should be able to get categories', () => {
            const mockContext: Context = {
                done: (err, response) => {
                    expect(err).toBeUndefined();
                    console.log('response is:' + response)
                },

                bindingData: {
                },

                log: function () {
                    console.log();
                },

                req : {
                    originalUrl : 'localhost'
                }
            };

            const mockRequest: HttpRequest = {
                method: HttpMethod.Get,
            };

            run(mockContext, mockRequest);
        });
    });
})
*/