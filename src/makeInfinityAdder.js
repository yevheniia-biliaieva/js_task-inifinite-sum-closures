'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  const adder = (a) => {
    if (a === undefined) {
      return 0;
    }

    return (b) => {
      let result = a;

      if (b === undefined) {
        return result;
      }

      result += b;

      return adder(result);
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
