def first_last6(nums):
  last = len(nums) - 1
  if nums[0] == 6 or nums[last] == 6:
    return True
  else:
    return False
