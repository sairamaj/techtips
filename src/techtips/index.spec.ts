import { join } from 'path';
import { Context, HttpMethod, HttpRequest, HttpStatusCode } from 'azure-functions-ts-essentials';
import { run } from './index';
import * as fs from 'fs';

// delete console.log;
const testFunc = function(verify, category){
    const mockContext: Context = {
        done: (err, response) => {
            verify(mockContext.res.body);
        },

        bindingData: {
        },

        log () {
        },

        req : {
            originalUrl : 'localhost'
        }
    };

    const mockRequest: HttpRequest = {
        method: HttpMethod.Get
    };

    mockContext.bindingData.category = category;

    run(mockContext, mockRequest);
};

describe('@azure-seed/azure-functions-typescript', () => {
    describe('GET /api/techtips', () => {
        it('should be able to get categories', () => {
            testFunc(response => {

                const dataDir = `${__dirname}/data`;
                const expectedCategories = fs.readdirSync(dataDir).length;
                expect(response)
                    .toBeDefined();
                expect(response.length)
                    .toBe(expectedCategories);
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
                console.log('categoris:' + categories);
                categories.forEach(category => {
                    console.log('testing:' + category.name);
                    testFunc(tips => {
                        expect(tips)
                            .toBeDefined();
                    }, category.name)});

        }, undefined);
        });

    });
});
