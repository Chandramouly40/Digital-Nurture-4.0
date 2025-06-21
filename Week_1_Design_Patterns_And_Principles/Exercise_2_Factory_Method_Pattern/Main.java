public class Main{
  public static void main(String[] args){
    Document word = new WordFactory().createDocument();
    word.open();
    Document pdf = new PdfFactory().createDocument();
    pdf.open();
    Document excel = new ExcelFactory().createDocument();
    excel.open();
    word.edit();
    pdf.edit();
    excel.edit();
    word.delete();
    pdf.delete();
    excel.delete();
  }
}
