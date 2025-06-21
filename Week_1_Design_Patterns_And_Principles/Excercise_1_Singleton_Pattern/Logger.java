public class Logger{
  private static Logger log;

  private Logger(){
    
  }
  public synchronized static Logger getInstance(){
    if(log==null){
      log = new Logger();
    }
    return log;
  }
  public void log(String msg){
    System.out.println("Log message:"+msg);
  }
}
