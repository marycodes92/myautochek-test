describe('Autocomplete, IndeedAPI methods', () => {
    describe('jobTitle', () => {
        it('should autocomplete ', async () => {
            const query = `
                query autocomplete {
                    Autocomplete {
                        jobTitle(query: "Cashier", maxResults: 2) {
                            results
                        }
                    }
                }
            `;
            const resp = await fetch(endpointUrl, Helpers.generateGraphQLRequestWithoutAuth(query));
            const jsonResponse = await resp.json();
            expect(jsonResponse.errors).toBe(undefined);
            expect(jsonResponse.data.Autocomplete).not.toBe(undefined);
            const results = jsonResponse.data.Autocomplete.jobTitle.results;
            expect(results).not.toBe(undefined);
            expect(results.length).toBe(2);
            expect(results).toBeInstanceOf(Array);
        });
    });
    describe('companyName', () => {
        it('should autocomplete ', async () => {
            const query = `
                query autocomplete {
                    Autocomplete {
                        companyName(query: "tes", maxResults: 2) {
                            results
                        }
                    }
                }
            `;
            const opts = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query })
            };
            const resp = await fetch(endpointUrl, opts);
            const jsonResponse = await resp.json();
            expect(jsonResponse.errors).toBe(undefined);
            expect(jsonResponse.data.Autocomplete).not.toBe(undefined);
            const results = jsonResponse.data.Autocomplete.companyName.results;
            expect(results).not.toBe(undefined);
            expect(results.length).toBe(2);
            expect(results).toBeInstanceOf(Array);
        });
    });
});