using System;

namespace HelloWorld {
  class Program{
    static void Main(string[] args){
      int[] numbers = {34, 12, 4, 212, 23, 667, 2, 123,5, 243, 99, 100};
      // int number = 34;
      // string name = "Jacob";
      // double price = 9.99D;
      // char letter = 'D';      
      bool swapping = true;
       Console.WriteLine("Starting Value: [{0}]", string.Join(", ", numbers));
      while (swapping) {
        swapping = false;
        for(int i = 0; i < numbers.Length - 1; i++){
          if(numbers[i] > numbers[i + 1]){
            Swap(i, numbers);
            Console.WriteLine("[{0}]", string.Join(", ", numbers));
            swapping = true;
            }
        }
      }

      Console.WriteLine("Finished Value: [{0}]", string.Join(", ", numbers));
    }

    static int[] Swap(int index, int[] numbers) {
      int ind1 = numbers[index];
      int ind2 = numbers[index + 1];

      numbers[index] = ind2;
      numbers[index + 1] = ind1;


      return numbers;
    } 
  }
}