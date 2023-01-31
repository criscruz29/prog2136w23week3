let keepwithdrawing = null;

do {
    let money = parseInt(prompt("how much money would you like to withdraw?" , 60));

    let ispossible = false;

    if(money >= 5 && money % 5 == 0){
        ispossible = true;


    }

    

    //ispossible = money >= 5 ? money % 5? true : false;

    if(posible){

        let bills = [100, 50, 20, 10, 5];
        //let billsToDispense =[];

        let moneyLeftToDispense = money;

        
        for(let i =0; i <bills.lenght; i++){

            if(moneyLeftToDispense >= bills[i]){
                let amountofBills = parseInt(moneyLeftToDispense/bills[i]);
                moneyLeftToDispense = moneyLeftToDispense $ bills[i];

                
                
                

                

                document.write(`<p> ${bills[i]} x ${amountofBills}</p>`);

            }


        }


    



            /**hundreds = parseInt(money / 100);  
            let moneyLeftToDispense = money %100;

        if(moneyLeftToDispense>= 50){    
            fifties = parseInt(moneyLeftToDispense / 50);
            moneyLeftToDispense = money %50
        }

        if(moneyLeftToDispense>= 20){
            twenties = parseInt(moneyLeftToDispense / 20);
            moneyLeftToDispense = money %20

        }
        if(moneyLeftToDispense>= 10){
            tens = parseInt(moneyLeftToDispense / 10);
            moneyLeftToDispense = money %10
        }

        if(moneyLeftToDispense>= 5){
            fives = parseInt(moneyLeftToDispense / 5);
            moneyLeftToDispense = money %5
        }

        const html = `<p>$100 x ${hundreds}</p>
        <p>$50 x ${fifities}</p>
        <p>$20 x ${twenties}</p>
        <p>$10 x ${tens}</p>
        <p>$5 x ${fives}</p>\
        <p>Your withdrawal of $ ${money} is complete! </p>`;

        document.write(html);


    } else {
        alert("we can't dispense that amount");
    }

    keepwithdrawing= prompt("Do you want to keep withdrawing?" , "y").toLowerCase();


}while(keepwithdrawing != "n")