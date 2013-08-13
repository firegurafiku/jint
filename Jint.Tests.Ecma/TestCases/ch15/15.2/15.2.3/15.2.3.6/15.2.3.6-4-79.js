/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-79.js
 * @description Object.defineProperty - both desc.enumerable and name.enumerable are boolean values with the same value (8.12.9 step 6)
 */


function testcase() {

        var obj = {};

        Object.defineProperty(obj, "foo", { enumerable: false });

        Object.defineProperty(obj, "foo", { enumerable: false });
        return dataPropertyAttributesAreCorrect(obj, "foo", undefined, false, false, false);
    }
runTestCase(testcase);