var getAgeFactor=function(clientAccount )

{ var factor ;

    if (clientAccount.age <15 || clientAccount.age >= 90)// BOUNDARY TEST changed from > 90 to >= 90

        factor= 0;

    else  if (clientAccount.age <25)

        factor = 10;

    else if (clientAccount.age <35)

        factor= 15;

    else if (clientAccount.age <45)

        factor=20;

    else if (clientAccount.age <65)

        factor =45;

    else if (clientAccount.age <90)

        factor =25;

    return factor;

}

var getBalanceFactor=function (clientAccount )

{    var factor;


    if (clientAccount.balance <= 0 || clientAccount.balance >= 3000)// BOUNDARY TEST changed from > 3000 to >= 3000


        factor = 0;

    else if (clientAccount.balance < 100)

        factor = 5;

    else if (clientAccount.balance < 500)

        factor = 10;

    else if (clientAccount.balance < 1000)

        factor = 20;

    else if (clientAccount.balance < 2000)

        factor = 60;

    else if ( clientAccount.balance < 3000)

        factor = 100;

    return factor;

}

var accountStatus=function (clientAccount ) {

    var factor1 = module.exports.getAgeFactor(clientAccount );  // EC TEST added module.exports

    var factor2 = module.exports.getBalanceFactor(clientAccount );  //EC TESTadded module.exports

    var factor3 = factor1 * factor2;

    if (factor3 == 0)//EC TEST had to edit, original: if (factor3 = 0)

        return "invalid"
;
      else if (factor3 < 100)

        return "poor";

   	else
 if (factor3 < 500)

        return "acceptable";

    	else if (factor3 < 1000)

        return "good"

  	else

        return "excellent";

}

var creditStatus=function (clientAccount,creditCheckMode)

{var scoreThreshold;

    if (clientAccount.creditScore <0 || clientAccount.creditScore >= 100)// BOUNDARY TEST changed from > 100 to >= 100


       return "invalid";


    if (creditCheckMode ==="strict")

        scoreThreshold=55;

      else if (creditCheckMode ==="default")

        scoreThreshold=85;

    if (clientAccount.creditScore < scoreThreshold)//EC TEST changed from > to < to represent the functional requirements outlined in the assignment

        return "poor";

     else return "good";

}

var productStatus=function (product,inventory,inventoryThreshold)

{ var q;

    for (i=0;i<inventory.length;i++)//EC TEST change <= to <

    {
        if (product == inventory[i].name)

            {
              q=inventory[i].q;

          	 if (q<=0)// BOUNDARY TEST, replace q == 0 with q <= 0

              return "soldout";

            else if (q >= inventoryThreshold)//EC TEST changed < to >=

              return "available"

            else return "limited"
		}
    }
 return "invalid";
}


var orderHandling=function(clientAccount ,product,inventory,inventoryThreshold,creditCheckMode)

{

    var aStautus=module.exports.accountStatus(clientAccount );

    var cStatus=module.exports.creditStatus(clientAccount ,creditCheckMode);

    var pStatus=module.exports.productStatus(product,inventory,inventoryThreshold);

   if ((aStautus==="invalid"||cStatus==="invalid"||pStatus==="invalid")||   //EC TEST changed != to ===
   (aStautus==="acceptable" &&  cStatus==="poor" && pStatus==="soldout") ||     
   (aStautus==="poor" && cStatus==="good" && pStatus==="soldout") || 
   (aStautus==="poor" && cStatus==="poor" ))
        return "rejected";

   else if ((aStautus==="excellent")|| (aStautus==="good" && cStatus==="good")||
  (aStautus=== "good" && cStatus==="poor" && 	pStatus==="available")||
  (aStautus=== "acceptable" && cStatus==="good" && pStatus==="available"))
        return "accepted";


   else if ((aStautus ==="acceptable" && cStatus==="good" && pStatus==="limited")|| //EC TEST chenged pStatus !="limited" to pStatus === "limited"
   (aStautus ==="acceptable" && cStatus==="poor" && pStatus==="available")|| //EC TEST chenged pStatus != "available" to pStatus === "available"
   (aStautus==="poor" && cStatus==="good" && pStatus==="limited"))
        return "pending";





}

module.exports = {
    getAgeFactor,
    getBalanceFactor,
    accountStatus,
    creditStatus,
    productStatus,
    orderHandling
}