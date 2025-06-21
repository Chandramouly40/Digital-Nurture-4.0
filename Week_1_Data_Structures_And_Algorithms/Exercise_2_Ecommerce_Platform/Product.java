package Ecommerce;
public class Product{
  private String name;
  private int id;
  private String category;
  public Product(String name,int id,String category){
    this.name = name;
    this.id = id;
    this.category = category;
  }
  public String getName(){
    return name;
  }
  public int getId(){
    return id;
  }
  public String getCategory(){
    return category;
  }
}
