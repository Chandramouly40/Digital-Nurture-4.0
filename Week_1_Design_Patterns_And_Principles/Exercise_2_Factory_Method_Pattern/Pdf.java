public class Pdf implements Document{
  private String name;
  private String type;
  private int size;
  public Pdf(String name, String type, int size){
    this.name = name;
    this.type = type;
    this.size = size;
  }
  public void open(){
    System.out.println("Pdf Document Opened");
  }
  public void delete(){
    System.out.println("Pdf Document Deleted");
  }
  public void edit(){
    System.out.println("Pdf Document Edited");
  }
  public void save(){
    System.out.println("Pdf Document Saved");
  }
}
