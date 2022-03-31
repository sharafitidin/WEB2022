import math
n = int(input())
i = 1
while i < n:
    x = math.sqrt(i)
    if (x*x == i) and (x < math.sqrt(n)):
        print(i)
    i += 1