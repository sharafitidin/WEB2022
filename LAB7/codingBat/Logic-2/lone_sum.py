def lone_sum(a, b, c):
  arr = (a, b, c)
  return sum(n for n in arr if arr.count(n) == 1)
