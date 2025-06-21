public class WordFactory implements DocumentFactory{
  public Document createDocument(){
    return new Word("Word", "Word", 200);
  }
}
