

let otp;


let getOtp = () => {
    let mobilenumber = document.getElementById("mobilenumber").value

    if (mobilenumber) {
        otp = Math.trunc(Math.random() * 9000 + 1000)  //9000 + 1000 because the Math.random generates the values between 0-1,
        //  here there's a possibility of getting a 3 digin number because of *10000 
        // so 9000+1000 can negate this error

        let otpinput = document.getElementById("otpinput")

        console.log(otpinput);
        alert(`YOUR OTP IS ${otp}`) //alert message

        otpinput.value = otp //to autofill the otp in the input field

    } else {
        alert("Please enter mobile number")

    }


}



let HomePage = () => {
    if (otp) {

        window.location.href = "https://www.meesho.com/?srsltid=AfmBOooZ3cJ9a2XMo6iyt_t9cFOVJhTyam9-tdFoS2ZI7WKk32wcb2JW"


    } else {
        alert("Enter OTP first")

    }
}