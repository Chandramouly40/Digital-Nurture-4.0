import java.util.Scanner;
public class FinancialForecast{
  public static double forecast(double price,int year){
    if(year == 0){
      return price;
    }
    return forecast(price+price*0.2,year-1);
  }
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter the price: ");
    double price = sc.nextDouble();
    System.out.println("Enter year: ");
    int year = sc.nextInt();
    System.out.println("The forecasted price is: "+forecast(price,year));
  }
}
