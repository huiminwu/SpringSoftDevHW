def pytri(n):
    return [(a,b,c) for a in range(1, n) for b in range(1, n) for c in range(1, n) if a*a + b*b == c*c]

#print(pytri(40))

def quickso(n):
    pivot = n[-1]
    list1 = [n[i] for i in range(len(n) - 1) if n[i] < pivot]
    list2 = [n[i] for i in range(len(n) - 1) if n[i] >= pivot]
    if(len(n) < 2):
        return list1 + list2
    else:
        return quickso(list1) + [pivot] + quickso(list2)

print(quickso([3,46,1,5,7,8,3]))
