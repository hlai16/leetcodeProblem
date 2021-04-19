/**
 * Leetcode problems
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 still trying to figure out. I have poor comprehension skills.
 */
const twoSum = function(nums, target) {
    const numbers = {};
    for(let i=0; i<nums.length; i++){
        if(numbers[nums[i] ]>=0){
            return [ numbers[nums[i] ] , i]
        }
        numbers[target-nums[i]] = i
    }
};