import Ecommerce.*;
import java.util.*;
public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    Inventory inventory = new Inventory();
    inventory.addProduct("Laptop", 1, "Electronics");
    inventory.addProduct("Mobile", 2, "Electronics");
    inventory.addProduct("Shirt", 3, "Clothing");
    inventory.addProduct("Pants", 4, "Clothing");
    inventory.addProduct("Shoes", 5, "Clothing");
    inventory.addProduct("Watch", 6, "Accessories");
    inventory.addProduct("Bag", 7, "Accessories");
    inventory.addProduct("Headphones", 8, "Accessories");
    inventory.addProduct("Speakers", 9, "Accessories");
    inventory.addProduct("Camera", 10, "Electronics");
    System.out.println("Enter the id of the product to search: ");
    int id = sc.nextInt();
    System.out.println("Linear Search:");
    inventory.linearSearch(id);
    System.out.println("Binary Search:");
    inventory.binarySearch(id);
  }
}
