import math
n = int(input())
m = int(input())
for i in range(n, m+1):
    i_sqrt = math.sqrt(float(i))
    if(i_sqrt * i_sqrt == i):
        print(i, end = " ")