const readlineSync = require('readline-sync');
function randomInt(min, max)
         {
            return Math.floor(Math.random() * (max + 1 - min) + min);
         }
         function Make()
         {
            var ourNum = '';
            for(var i=0;i<4;i++)
            {
                do
                {
                    var newDig = randomInt(0,9);
                }
                while(ourNum.indexOf(newDig)>=0);
                ourNum = ourNum + newDig;
            }
            return ourNum;
         }
         function Convert(make, attempt)
         {
            var bull = 0;
            var cow = 0;
            for (var i=0;i<4;i++)
            {
                if (attempt[i]==make[i]) bull++;
                else
                    if (make.indexOf(attempt[i])>=0) cow++;
            }
            console.log("bull: " + bull + "; cow: " + cow +".");
         }
         var number = Make();
         var insertNum;
         do
         {
            insertNum = readlineSync.question("Enter your Number: ");
            Convert(number, insertNum)
         }
         while(number != insertNum);
         console.log("Congrats!");