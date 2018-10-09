import { Context, HttpMethod, HttpRequest } from 'azure-functions-ts-essentials';
import { run } from './index';
import * as fs from 'fs';


// delete console.log;
const testFunc = function (verify, category) {
    const mockContext: Context = {
        done: () => {
            verify(mockContext.res.body);
        },

        bindingData: {
        },

        req: {
            originalUrl: 'localhost',
            query: {},
            method: HttpMethod.Get,
        }
    };

    const mockRequest: HttpRequest = {
        method: HttpMethod.Get,
        params: {
            category: category
        }        
    };

    run(mockContext, mockRequest);
};

describe('tech tips', () => {
    describe('GET /api/techtips', () => {
        it.only('should be able to get categories', () => {
            // testFunc(response => {

            //     const dataDir = `${__dirname}/data`;
            //     const expectedCategories = fs.readdirSync(dataDir).length;
            //     console.log('response: ' + JSON.stringify(response))
            //     // expect(response)
            //     //     .toBeDefined();
            //     // expect(response.length)
            //     //     .toBe(expectedCategories);
            // }, undefined);
        });

        it('should be able to get categories with associated type.', () => {
            testFunc(response => {

                const dataDir = `${__dirname}/data`;
                const expectedCategories = fs.readdirSync(dataDir).length;
                expect(response)
                    .toBeDefined();
                expect(response.length)
                    .toBe(expectedCategories);
                response.forEach(cat => {
                    expect(cat.type)
                        .toBeDefined();
                    expect(['command', 'info'])
                        .toContain(cat.type);
                });
            }, undefined);
        });

        it('should be able to get each category', () => {
            testFunc(categories => {

                const dataDir = `${__dirname}/data`;
                const expectedCategories = fs.readdirSync(dataDir).length;
                expect(categories)
                    .toBeDefined();
                expect(categories.length)
                    .toBe(expectedCategories);
                categories.forEach(category => {
                    testFunc(tips => {
                        expect(tips)
                            .toBeDefined();
                        // expect(tips.length)
                        //     .toBeGreaterThanOrEqual(1);
                    }, category.name);
                });

            }, undefined);
        });

    });
});
