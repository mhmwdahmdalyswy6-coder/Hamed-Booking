function selectBranch(branchName) {

    document.getElementById("branch").value = branchName;

    document.getElementById("branches").style.display = "none";

    document.getElementById("bookingForm").style.display = "block";

    document.getElementById("successMessage").style.display = "none";

    window.scrollTo({
        top: document.getElementById("bookingForm").offsetTop,
        behavior: "smooth"
    });

}

document.getElementById("bookingForm").addEventListener("submit", async function (e) {

    e.preventDefault();

    const form = document.getElementById("bookingForm");
    const success = document.getElementById("successMessage");

    const data = {
        branch: document.getElementById("branch").value,
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        grade: document.getElementById("grade").value
    };

    try {

        const response = await fetch("https://script.google.com/macros/s/AKfycbwRmmML4h_p-GPJLclON4vMtD9TXWkykXaRD5zfMJDTUJh22BFajLt6EHx6cDCVix3Rsg/exec", {
            method: "POST",
            body: JSON.stringify(data)
        });

        if (response.ok) {

            form.reset();

            form.style.display = "none";

            success.style.display = "block";

            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });

        } else {

            alert("حدث خطأ أثناء إرسال البيانات.");

        }

    } catch (error) {

        alert("تعذر الاتصال بالخادم.");

        console.log(error);

    }

});