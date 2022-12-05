
#include <iostream>

using namespace std;

int *swap(int index, int array[])
{
  int ind1 = array[index];
  int ind2 = array[index + 1];

  array[index] = ind1;
  array[index + 1] = ind2;

  return array;
}

int main()
{
  int array[] = {11, 15, 18, 19, 20, 6, 26, 12, 27, 28, 17};
  bool swapping = true;
  int length = sizeof(array) / sizeof(int);

  while (swapping)
  {
    swapping = false;
    for (int i = 0; i < length; i++)
    {
      if (array[i] > array[i + 1])
      {
        swap(i, array);
        swapping = true;
      }
    }
  }

  for (int i = 0; i < length; i++)
  {
    if (array[i] > array[i + 1])
    {
      swap(i, array);
      swapping = true;
    }
  }
  for (int i = 0; i < length; i++)
  {
    cout << array[i] << " ";
  }
  for (int i = 0; i < length; i++)
  {
    if (array[i] > array[i + 1])
    {
      swap(i, array);
      swapping = true;
    }
  }
  for (int i = 0; i < length; i++)
  {
    cout << array[i] << " ";
  }

  return 0;
}
