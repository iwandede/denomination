"use strict";
/**
 * [denomination description]
 * Editor : Iwan Gunawan
 * Email : iwan.gunawan81@gmail.com
 * @param {[type]} amount [description]
 * @return {[type]} [description]
 */

module.export = denomination(amount) {
  const notes = [1e5, 5e4, 2e4, 1e4, 5e3, 2e3, 1e3, 500, 100, 50];
  const noteCounter = [];
  let result = [];

  notes.map((f, i) => {
    noteCounter.push(0);
    if (amount >= f) {
      noteCounter[i] = parseInt(amount / f);
      amount = amount - noteCounter[i] * f;
    }

    if (noteCounter[i] != 0) result.push({
      notes: f,
      counter: noteCounter[i]
    });

  });

  return result;
};
