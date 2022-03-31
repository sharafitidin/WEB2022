def first_half(str):
  half = len(str)/2
  ans = ""
  for i in range(half):
    ans += str[i]
  return ans