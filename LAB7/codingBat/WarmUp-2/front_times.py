def front_times(str, n):
  front_size = 3
  if len(str) < front_size:
    front_size = len(str)
  ans = str[:front_size]
  res = ""
  for i in range(n):
    res += ans
  return res 