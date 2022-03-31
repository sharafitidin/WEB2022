def front3(str):
  front_size = 3
  if len(str) < front_size:
    front_size = len(str)
  front = str[:front_size]
  return front + front + front 