import random

def generate_random_array(n):
    return [random.randint(0, 1000) for _ in range(n)]

def bubble_sort(arr):
    n = len(arr)
    for i in range(n-1, 0, -1):
        for j in range(i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

def improved_bubble_sort(arr):
    n = len(arr)
    improved = False
    for i in range(n-1, 0, -1):
        for j in range(i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                improved = True
        if not improved:
            break

def shake_sort(arr):
    n = len(arr)
    for i in range(n):
        left, right = 0, n-1
        while left < right:
            if arr[left] > arr[right]:
                arr[left], arr[right] = arr[right], arr[left]
            left += 1
            right -= 1

def selection_sort(arr):
    n = len(arr)
    for i in range(n-1):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        key = arr[i]
        j = i-1
        while j >= 0 and key < arr[j]:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key

def shell_sort(arr):
    n = len(arr)
    gap = n//2
    while gap > 0:
        for i in range(gap, n):
            temp = arr[i]
            j = i
            while j >= gap and arr[j-gap] > temp:
                arr[j] = arr[j-gap]
                j -= gap
            arr[j] = temp
        gap //= 2

def main():
    n = 20
    arr = generate_random_array(n)
    print("Original array:", arr)

    bubble_sort(arr.copy())
    print("Bubble sort:", arr)

    improved_bubble_sort(arr.copy())
    print("Improved bubble sort:", arr)

    shake_sort(arr.copy())
    print("Shake sort:", arr)

    selection_sort(arr.copy())
    print("Selection sort:", arr)

    insertion_sort(arr.copy())
    print("Insertion sort:", arr)

    shell_sort(arr.copy())
    print("Shell sort:", arr)

if __name__ == "__main__":
    main()