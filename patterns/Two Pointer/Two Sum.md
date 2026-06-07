# Two Sum II - Input Array Is Sorted

URL – https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

Problem
-------
Given a sorted array of integers `numbers` (ascending) and a target value `target`, return the 1-based indices of the two numbers that add up to `target`.

Note: This problem expects 1-based indices in the result (not 0-based).

Approach (Two pointers)
------------------------
Because the array is sorted, we can use two pointers: one at the start (left) and one at the end (right). Compute the sum of the values at the pointers:

- If sum == target: we found the pair (return 1-based indices).
- If sum > target: decrease the right pointer to reduce the sum.
- If sum < target: increase the left pointer to increase the sum.

This runs in O(n) time and O(1) extra space.

Quick intuition / proof
-----------------------
When sum > target, any candidate using the current left and a smaller right index would only make the right value smaller and thus the sum smaller — so moving right leftwards is safe. Symmetric reasoning applies when sum < target.

Examples
--------
1) Input: numbers = [2,7,11,15], target = 9
   Output: [1,2]

2) Input: numbers = [2,3,4], target = 6
   Output: [1,3]

3) Input: numbers = [-1,0], target = -1
   Output: [1,2]

4) Input: numbers = [1,2,3,4,4,9], target = 8
   Output: [4,5]  (example with duplicates)

Edge cases
----------
- Empty or null input -> return []
- Length < 2 -> return []
- Duplicate values (works fine)
- Negative and positive values (works fine)
- LeetCode guarantees a solution for this problem; if used as a general library you may prefer throwing an exception when no pair is found.

ASCII diagram (pointers move inward)
------------------------------------
Example array: [1, 2, 3, 4, 6], target = 7

 left -> 1   2   3   4   6 <- right
 indices 0   1   2   3   4

 Step 1: left=0 (1), right=4 (6) => sum=7 -> found -> return [1,5]

If not found immediately, imagine arrows moving inward:
 [1, 2, 3, 4, 6]
  ^           ^
  |           |
 left       right
  -> move right leftwards if sum>target
  -> move left rightwards if sum<target

TypeScript (improved)
---------------------
```typescript
/**
 * Finds two 1-based indices of numbers that add up to target in a sorted array.
 * @param numbers Sorted array of integers (ascending).
 * @param target Target sum.
 * @returns [index1, index2] (1-based). Returns [] if no pair found.
 */
function twoSum(numbers: number[], target: number): number[] {
  if (!numbers || numbers.length < 2) return [];

  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1]; // 1-based indices
    }

    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [];
}
```

Java (improved)
----------------
```java
/**
 * Returns 1-based indices of two numbers adding up to target in a sorted array.
 * If no such pair exists, returns an empty array.
 */
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        if (numbers == null || numbers.length < 2) return new int[]{};

        int left = 0;
        int right = numbers.length - 1;

        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target) {
                return new int[]{left + 1, right + 1};
            } else if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
        return new int[]{}; // or throw new IllegalArgumentException("No solution")
    }
}
```

Minimal TypeScript test harness
-------------------------------
```typescript
// Quick manual tests
console.log(twoSum([2,7,11,15], 9)); // [1,2]
console.log(twoSum([2,3,4], 6));     // [1,3]
console.log(twoSum([-1,0], -1));     // [1,2]
console.log(twoSum([1,2,3,4,4,9], 8)); // [4,5]
```

Complexity Analysis
-------------------
- Time: O(n) — each pointer moves at most n times.
- Space: O(1) — constant extra space.

Alternative approaches
----------------------
- Hash map: O(n) time but O(n) extra space. Useful if the array is not sorted.

Presentation / documentation suggestions
--------------------------------------
- Mention explicitly that indices are 1-based at the top of the file (done).
- Add a small ASCII or image diagram (done). If you'd like an image file instead, I can add one to the repo.
- Optionally add unit tests (Jest) or a small Node script for automated testing.

Takeaways
---------
- Two pointers is the canonical solution when the input is sorted and you need to find pair sums.
- Prefer this method for O(1) extra space and linear time.

If you want, I can also:
- add a small image diagram file instead of ASCII,
- create a `two-sum.ts` and a `test` script (Jest or simple Node), or
- convert the TypeScript solution into a small runnable example in the repo.

