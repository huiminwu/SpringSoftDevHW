#Hui Min Wu
#SoftDev2 pd8
#K22 -- Closure
#2019-05-01

def repeat(x):
    def n(n):
        print(x * n)
    return n

r1 = repeat('hello')
r2 = repeat('goodbye')

r1(2)
r2(2)
repeat('cool')(3)

def make_counter():
    x = 0
    def c():
        nonlocal x
        x = x + 1
        print(x)
    c()
    return c

ctr1 = make_counter()
ctr2 = make_counter()
