'''
Team Weem Addison Huang and Hui Min Wu
softDev2 pd 8
k19
2019-04-17
'''

def intersection(A,B):
    """
    @param A: first set
    @param B: second set
    @return: elements that are in both sets
    """
    return [x for x in A if x in B]

def setdiff(A, B):
    """
    @param A: first set
    @param B: second set
    @return: elements in A that are not in B
    """
    return [x for x in A if not x in B]

def sym(A, B):
    """
    @param A: first set
    @param B: second set
    @return: the setdiffs of both sets. elements that are unique to each set
    """
    return setdiff(A, B) + setdiff(B, A)

def cartProd(A,B):
    """
    @param A: first set
    @param B: second set
    @return: list of x,y where x and y are elements in A and B respectively
    """
    return [[x,y] for x in A for y in B]

def union(A,B):
    """
    @param A: first set
    @param B: second set
    @return: union of two lists every element(no duplicates)
    """
    return [x for x in A if x not in B] + [x for x in B]

print(intersection([1,2,3],[2,3,4]))
print(intersection([2,3,4],[2,2,2]))

print(cartProd([1,2],["red","white"]))
print(cartProd(["Annie","HMDubs"],["EDubs", "MTang", "Em", "Prof Huang"]))
print(sym([1,2,3], [2,3,4]))
print(union([1,2,3],[2,3,4]))
print(sym([1,2,3], [2,3,4]))
print(setdiff([2,3,4], [1,2,3]))
