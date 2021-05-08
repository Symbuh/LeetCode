/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function(nums, target) {
  /*
      Find all the ways that you can hit target using the array nums

      Looks like we're just going to have to check every single possibility

      We're going to have to just do a decision tree.
  */

  let solutions = new Set();

  let findSolution = (index, total, str) => {

      if (index === nums.length) {
          if (total === target) {
              solutions.add(str);
          }
          return;
      }
      let plussole = str + '+';
      let minun = str + '-';
      let add = total + nums[index];
      let subtract = total - nums[index];
      index++;
      findSolution(index, subtract, minun);
      findSolution(index, add, plussole);
  }
  findSolution(0, 0, '');
  return solutions.size
};