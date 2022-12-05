import java.util.*;

public class Bubblesort {

  public static void main(String[] args) {
    int[] array = { 18, 12, 5, 46, 42, 50, 27, 9, 45, 27, 11, 47, 6, 3 };
    
    boolean swapping = true;

    while (swapping) {
      swapping = false;
      for (int i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]){
          swap(i, array);  
          swapping = true;
        }
      } 
    }

    System.out.println(Arrays.toString(array));
  }

  public static int[] swap(int index, int[] array) {

    int ind1 = array[index];
    int ind2 = array[index + 1];

    array[index] = ind2;
    array[index + 1] = ind1;

    return array;
  }
}