def pow_res(a, b):
    ans = pow(a, b)
    return ans

a, b = [int(x) for x in input().split()]
print(pow_res(a, b))