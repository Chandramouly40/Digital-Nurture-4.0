public class Excel implements Document{
  private String name;
  private String type;
  private int size;
  public Excel(String name, String type, int size){
    this.name = name;
    this.type = type;
    this.size = size;
  }
  public void open(){
    System.out.println("Excel Document Opened");
  }
  public void delete(){
    System.out.println("Excel Document Deleted");
  }
  public void edit(){
    System.out.println("Excel Document Edited");
  }
  public void save(){
    System.out.println("Excel Document Saved");
  }
}
