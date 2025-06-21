public class PdfFactory implements DocumentFactory{
  public Document createDocument(){
    return new Pdf("Pdf", "Pdf", 50);
  }
}
