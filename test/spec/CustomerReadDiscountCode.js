/*

   Copyright 2016 Gregor Wolf

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*/

describe("Login and read discount codes", function() {
    it("should Login user and read discount codes", function() {
        csrfToken = getCSRFtokenAndLogin("BSCUSTOMER", password);

        var xhr = prepareRequest("GET", "/de/linuxdozent/gittest/odatapublic/service.xsodata/DiscountCode");
        xhr.send();
        expect(xhr.status).toBe(200);
        var body = xhr.responseText ? JSON.parse(xhr.responseText) : "";
        SHA256HASH = body.d.results[0].SHA256HASH;

        logout(csrfToken);
        checkSession();
    });
});
