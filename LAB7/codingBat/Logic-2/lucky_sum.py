def lucky_sum(a, b, c):
  ans = 0
  for n in (a, b, c):
    if n != 13:
      ans += n
    else:
        break
  return ans