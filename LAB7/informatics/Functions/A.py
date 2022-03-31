def min_res(a, b, c, d):
    arr = [a, b, c, d]
    arr.sort()
    return arr[0]
a, b, c, d = input().split()
print(min_res(a, b, c, d))