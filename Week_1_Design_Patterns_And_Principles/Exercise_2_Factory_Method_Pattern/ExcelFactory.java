public class ExcelFactory implements DocumentFactory{
  public Document createDocument(){
    return new Excel("Excel", "Excel", 100);
  }
}
