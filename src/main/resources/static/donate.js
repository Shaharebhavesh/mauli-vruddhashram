


function setAmount(amount){

    document.getElementById("donationAmount").value = amount;

    document.querySelectorAll(".amount-card")
        .forEach(card => card.classList.remove("active"));

    const cards = document.querySelectorAll(".amount-card");

    cards.forEach(card => {

        if(card.querySelector("h3").innerText === "₹" + amount){

            card.classList.add("active");
        }

    });

}
/*razor pay*/

document.getElementById("pay-btn")
.addEventListener("click", async () => {

    const amount =
        document.getElementById("donationAmount").value;

    if(!amount || amount <= 0){

        alert("Please enter donation amount");

        return;
    }

    try{

        const response = await fetch(
            "/payment/create-order?amount=" + amount,
            {
                method:"POST"
            });

        const order = await response.json();

        const options = {

            key:"rzp_test_Sx9PoiNEpVPZcC",

            amount:order.amount,

            currency:"INR",

            name:"Mauli Vruddhashram",

            description:"Donation",

            image:"/images/logo.png",

            order_id:order.id,

            theme:{
                color:"#2F5D50"
            },

            handler:function(response){

                alert("Donation Successful ❤️");

                window.location.href="/success";
            }
        };

        const rzp = new Razorpay(options);

        rzp.open();

    }catch(error){

        console.error(error);

        alert("Unable to start payment.");
    }

});

