#def inc(x):
#    return x+1
#f=inc
#print(f(10))

#def adder(a,b):
#    return a + b
#
#def caller(c):
#    print(c(2,4))
#    print(c(3,5))
#
#caller(adder)

#def outer(x):
#    def contains(l):
#        return x in l
#    return contains
#
#contains_15 = outer(15)
#contains_15([1,2,3,4,5])
#contains_15([13,14,15,16,17])
#contains_15(range(1,20))
#
#del outer
##outer(42)
#contains_15(range(14,20))

#def outer():
#    x = "foo"
#    def inner():
#        x = "bar"
#    inner()
#    return x

#def repeat(x):
#    def n(n):
#        print(x * n)
#    return n
#
#r1 = repeat('hello')
#r2 = repeat('goodbye')
#
#r1(2)
#r2(2)
#repeat('cool')(3)

#def outer():
#    x = "foo"
#    def inner():
#        nonlocal x
#        x = "bar"
#    inner()
#    return x
#
#print(outer())

def make_counter():
    x = 0
    def c():
        nonlocal x
        x = x + 1
        print(x)
    c()
    return c

ctrl = make_counter()
