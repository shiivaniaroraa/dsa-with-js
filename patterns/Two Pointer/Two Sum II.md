# Two Sum II - Input Array Is Sorted

URL – https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

Problem
-------
Given a sorted array of integers `numbers` (ascending) and a target value `target`, return the 1-based indices of the two numbers that add up to `target`.

Note: The returned indices are 1-based.

Approach (Two pointers)
------------------------
Use two pointers — `left` at the start and `right` at the end — and adjust them based on the sum:

- If sum == target: return the pair (1-based indices).
- If sum > target: move `right` leftwards to decrease the sum.
- If sum < target: move `left` rightwards to increase the sum.

This yields O(n) time and O(1) space.

Examples
--------
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]

Input: numbers = [2,3,4], target = 6
Output: [1,3]

Input: numbers = [1,2,3,4,4,9], target = 8
Output: [4,5] (duplicates)

Edge cases
----------
- Empty or null input -> return []
- Length < 2 -> return []
- Duplicates: handled correctly
- Negative numbers and mixed signs: handled correctly

ASCII diagram (pointer movement)
--------------------------------
Example: numbers = [1, 2, 3, 4, 6], target = 7

  left -> 1   2   3   4   6 <- right
  index   0   1   2   3   4

  sum = 1 + 6 = 7 -> found -> return [1,5]

If not immediately found, pointers move inward:

 [1, 2, 3, 4, 6]
  ^           ^
  |           |
 left       right
  -> move right leftwards if sum>target
  -> move left rightwards if sum<target

TypeScript (recommended)
------------------------
```typescript
/**
 * Finds two 1-based indices of numbers that add up to target in a sorted array.
 */
function twoSum(numbers: number[], target: number): number[] {
  if (!numbers || numbers.length < 2) return [];

  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum > target) right--; else left++;
  }
  return [];
}
```

Java (recommended)
------------------
```java
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        if (numbers == null || numbers.length < 2) return new int[]{};

        int left = 0, right = numbers.length - 1;
        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target) return new int[]{left + 1, right + 1};
            if (sum > target) right--; else left++;
        }
        return new int[]{};
    }
}
```

Minimal TypeScript tests
------------------------
```typescript
console.log(twoSum([2,7,11,15], 9)); // [1,2]
console.log(twoSum([2,3,4], 6));     // [1,3]
console.log(twoSum([1,2,3,4,4,9], 8)); // [4,5]
```

Complexity
----------
- Time: O(n) — each pointer moves at most n steps.
- Space: O(1) — constant extra space.

Notes / Alternatives
--------------------
- Hash-map approach works if array is unsorted (O(n) time, O(n) space).
- For library code, consider throwing on "no solution"; for LeetCode problems, a solution is typically guaranteed.

If you want, I can also add an image diagram instead of ASCII, or create `two-sum.ts` and a small test script. Let me know which.

