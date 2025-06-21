package Ecommerce;

import java.util.*;

public class Inventory {
  List<Product> products;

  public Inventory() {
    products = new ArrayList<Product>();
  }

  public void linearSearch(int id){
    int comparison = 0;
    boolean found = false;
    for (Product p : products) {
      comparison++;
      if (p.getId() == id) {
        found = true;
        System.out.println("Number of comparisons: " + comparison);
        System.out.println("Product details:");
        System.out.println("Product Name: " + p.getName());
        System.out.println("Product ID: " + p.getId());
        System.out.println("Product Category: " + p.getCategory());
      }
    }
    if(!found){
      System.out.println("Product not found");
    }
  }
  public void binarySearch(int id){
    int comparison = 0;
    boolean found = false;
    int left = 0;
    int right = products.size() - 1;
    while (left <= right){
      comparison++;
      int mid = (left+right)/2;
      if(products.get(mid).getId() == id){
        found = true;
        System.out.println("Product details:");
        System.out.println("Product Name: " + products.get(mid).getName());
        System.out.println("Product ID: " + products.get(mid).getId());
        System.out.println("Product Category: " + products.get(mid).getCategory());
        System.out.println("Number of comparisons: " + comparison);
        break;
      }
      else if(products.get(mid).getId()>id){
        right = mid - 1;
      }
      else{
        left = mid + 1;
      }
    }
    if(!found){
      System.out.println("Product not found");
    }
  }
  
  public void addProduct(String name, int id, String category) {
    int flag = 0;
    for (int i = 0; i < products.size(); i++) {
      if (products.get(i).getId() >= id) {
        Product p = new Product(name, id, category);
        products.add(i, p);
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      Product p = new Product(name, id, category);
      products.add(p);
    }
  }

}
