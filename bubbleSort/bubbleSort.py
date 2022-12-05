arr = [23, 21, 48, 17, 8, 14, 9, 12, 9, 46, 38, 27]
swapping = True

def swap(index):
  ind1 = arr[index]
  ind2 = arr[index + 1]

  arr[index] = ind2
  arr[index + 1] = ind1
  return arr


while swapping:
  swapping = False
  for i in range(len(arr) - 1):
    if arr[i] > arr[i+ 1]:
      swap(i)
      swapping = True


print(f"Final:   {arr}")
