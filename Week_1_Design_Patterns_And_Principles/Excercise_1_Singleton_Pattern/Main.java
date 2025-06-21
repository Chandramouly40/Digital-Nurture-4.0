public class Main {
  public static void main(String[] args) {
    Logger log1 = Logger.getInstance();
    Logger log2 = Logger.getInstance();

    if(log1==log2){
      System.out.println("Both objects are same");
    }
    else{
      System.out.println("Both objects are not same");
    }
    
  }
}
