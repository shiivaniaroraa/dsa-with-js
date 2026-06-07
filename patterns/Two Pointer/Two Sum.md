# Two Sum with TypeScript

This problem is not a typical two-pointer problem. Instead, it can be solved efficiently using a hash map (or dictionary) to store the indices of the numbers we have seen so far. This allows us to find the complement of the current number in constant time.

<b>CATCH: Array is not sorted and need to return the indices of the two numbers.</b>

## Problem

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to the target.

You may assume that each input has exactly one solution, and you may not use the same element twice.


### Example

```typescript
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]

Input: nums = [3,2,4], target = 6
Output: [1,2]

```

## Solution

This solution uses a hash map to store previously visited numbers and their indices. For each number, we calculate the difference (`target - currentNumber`) and check whether that value has already been seen.

If the difference exists in the hash map, we have found the pair and can return their indices immediately.

### Code

```typescript
function twoSum(nums: number[], target: number): number[] {
    const mapping: Record<number, number> = {};

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (mapping[diff] !== undefined) {
            return [mapping[diff], i];
        }

        mapping[nums[i]] = i;
    }

    return [];
}
```

```java
import java.util.HashMap; 
import java.util.Map; 

class Solution { 
    public int[] twoSum(int[] nums, int target) { 
        Map<Integer, Integer> mapping = new HashMap<>(); 

        for (int i = 0; i < nums.length; i++) {
          int diff = target - nums[i]; 
          
          if (mapping.containsKey(diff)) { 
            return new int[]{mapping.get(diff), i}; 
          }

          mapping.put(nums[i], i); 
        }

        return new int[]{}; 
    } 
}
```

---

## Complexity Analysis

### Time Complexity

**O(n)**

* We iterate through the array once.
* Hash map lookups and insertions take **O(1)** on average.

### Space Complexity

**O(n)**

* In the worst case, we store every element in the hash map.

---

## Key Idea

Instead of using two nested loops (`O(n²)`), we use a hash map to remember numbers we've already seen. This allows us to find the matching complement in constant time and achieve an overall **O(n)** solution.

This format works well for a GitHub README, LeetCode solution explanation, or coding interview notes.
