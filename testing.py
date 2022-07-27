time = 6500543

for i in range(8):
    print(f"{time}:{time % 10}")
    time = time//10
