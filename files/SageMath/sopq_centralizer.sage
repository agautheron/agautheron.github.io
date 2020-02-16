# Find the commuator of the lie algebra so(p,q)
# i.e. find X \in M_{p,q}(RR) such that \forall S \in so(p,q) we have
# [S,X] = 0,
# this equation is satisfied for the basis of so(p,q) given by
# A_{i,j} = E_{i,j} - E_{j,i} \forall 1 \leq i < j \leq p
# D_{i,j} = E_{i,j} - E_{j,i} \forall p+1 \leq i < j \leq m
# B_{i,j} = E_{i,j} + E_{j,i} \forall 1\leq i\leq p, p+1\leq j\leq m

# Define dimensions
p = 2
q = 0
m = p + q
d = (m*(m-1))/2

S = {} # basis for so(p,q)
k = 1

# construct the basis of so(p,q)
for i in range(0, p-1): # A_{i,j} = E_{i,j} - E_{j,i} \forall 1 \leq i < j \leq p
    for j in range(i+1, p):
        A = matrix(m)
        A[i,j] = 1
        S[k] = A - A.transpose()
        k = k + 1

for i in range(p, m-1): # D_{i,j} = E_{i,j} - E_{j,i} \forall p+1 \leq i < j \leq m
    for j in range(i+1, m):
        A = matrix(m)
        A[i,j] = 1
        S[k] = A - A.transpose()
        k = k + 1

for i in range(0, p): # B_{i,j} = E_{i,j} + E_{j,i} \forall 1\leq i\leq p, p+1\leq j\leq m
    for j in range(p, m):
        A = matrix(m)
        A[i,j] = 1
        S[k] = A + A.transpose()
        k = k + 1

# Define commutators equations
x = var(['x_%d%d' %(i,j) for (i,j) in cartesian_product([range(1,m+1), range(1,m+1)])]);
X = matrix(SR, m, m, x)

E = {} # set of equations
J = {} # set of jacobian

for k in range(1, d+1):
    E[k] = X*S[k] - S[k]*X
    J[k] = jacobian(E[k].list(), x)

eqns = []
for k in range(1, d+1):
    eqns = eqns + [(J[k]*vector(SR, x))[n] == 0 for n in range(m*m)]

# solve equations
sol = solve(eqns, x)

print X.subs(sol)
