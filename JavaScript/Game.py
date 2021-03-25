import random as r

# Spel der brukar tipper eit tal.
bruker_tipp = int(input("Tipp eit tal mellom 1 og 1000000 "))

# Datamaskina finn eit tilfeldif tal.
rett_tal = r.randint(1,1000000)

# Tellar til antall forsøk.
f = 1

while bruker_tipp != rett_tal:
    if bruker_tipp < rett_tal:
        print("Du tippa for lavt")
    else:
        print("Du har tippa for høgt")
    f = f + 1
    bruker_tipp = bruker_tipp = int(input("Tipp eit nytt tal mellom 1 og 1000000 "))

# Brukar har tippa rett.
print("Gratulerar, du tippa rett på",f,"forsøk")


