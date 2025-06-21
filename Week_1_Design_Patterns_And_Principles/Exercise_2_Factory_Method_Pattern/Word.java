public class Word implements Document{
  private String name;
  private String type;
  private int size;
  public Word(String name, String type, int size){
    this.name = name;
    this.type = type;
    this.size = size;
  }
  public void open(){
    System.out.println("Word Document Opened");
  }
  public void delete(){
    System.out.println("Word Document Deleted");
  }
  public void edit(){
    System.out.println("Word Document Edited");
  }
  public void save(){
    System.out.println("Word Document Saved");
  }
}
