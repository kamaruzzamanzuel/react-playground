

// https://stackoverflow.com/questions/948358/adding-custom-functions-into-array-prototype#answer-35518127
// http://www.dotnetspeak.com/typescript/extending-javascript-arrays-with-typescript/
// export default
(function () {

  if (!Array.prototype.includesExt) {
    Array.prototype.includesExt = function <T>(searchElement: T | null | undefined, fromIndex?: number) {
      return (this as T[]).includes(searchElement!, fromIndex);
    };

    // Object.defineProperty(Array.prototype, 'includesWithNull', {
    //   value: function <T>(searchElement: T | null | undefined, fromIndex?: number) {
    //     return (this as T[]).includes(searchElement!, fromIndex);
    //   }
    // });
  }

  if (!Array.prototype.firstOrDefault) {
    Array.prototype.firstOrDefault = function <T>(predicate: (item: T) => boolean) {
      for (let i = 0; i < (this as T[]).length; i++) {
        const item = (this as T[])[i];

        if (predicate(item)) {
          return item;
        }
      }

      return null;
    };
  }

})();