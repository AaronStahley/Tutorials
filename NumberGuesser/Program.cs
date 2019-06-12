using System;

namespace NumberGuesser
{
    class Program
    {
        static void Main(string[] args)
        {
            GetAppInfo();

            GreatUser(); 

            while (true)
            {

                Random random = new Random();

                int correctNum = random.Next(1, 10);
                int guessNum = 0;

                Console.WriteLine("Guess a number between 1 and 10");

                while (guessNum != correctNum)
                {
                    string input = Console.ReadLine();

                    if (!int.TryParse(input, out guessNum))
                    {
                        PrintColorMessage(ConsoleColor.Red, "Please enter a valid number");
                        continue;
                    }

                    guessNum = Int32.Parse(input);

                    if (guessNum != correctNum)
                    {
                        PrintColorMessage(ConsoleColor.Red, "Wrong Number Please Try Again");
                    }
                }

                PrintColorMessage(ConsoleColor.Green, "You are CORECT!!!");

                Console.WriteLine("Do you want to play again ? [Y or N]");
                string ans = Console.ReadLine().ToUpper();

                if(ans == "Y")
                {
                    continue;
                }else if(ans == "N")
                {
                    return;
                }else
                {
                    return; 
                }
            }
        }

        static void GetAppInfo()
        {
            String appName = "Number Guesser";
            String appVersion = "1.0.0";
            String appAuthor = "Aaron Stahley";

            Console.ForegroundColor = ConsoleColor.Green;

            Console.WriteLine("{0}: Version: {1} By {2}", appName, appVersion, appAuthor);

            Console.ResetColor();
        }

        static void GreatUser()
        {
            Console.WriteLine("What is your name?");

            string inputName = Console.ReadLine();

            Console.WriteLine("Hello {0}, Lets play a game...", inputName);
        }

        static void PrintColorMessage(ConsoleColor color, String message)
        {
            Console.ForegroundColor = color;
            Console.WriteLine(message);
            Console.ResetColor();
        }
    }
}
 