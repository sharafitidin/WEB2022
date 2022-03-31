n = int(input())
leap = False
if n%4 == 0: 
    leap = True
    if n%100 == 0:
        leap = False
        if n%400 == 0:
            leap = True
if leap == True: 
    print("YES")
else:
    print("NO")