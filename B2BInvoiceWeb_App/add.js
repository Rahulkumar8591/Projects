/*Add Button Window */
document.getElementById("btn1").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
})
document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
})

/*Edit Button window*/
document.getElementById("btn2").addEventListener("click", function () {
    document.querySelector(".popup1").style.display = "flex";
})
document.querySelector(".close1").addEventListener("click", function () {
    document.querySelector(".popup1").style.display = "none";
})

/*Delete Button window*/
document.getElementById("btn3").addEventListener("click", function () {
    document.querySelector(".popup2").style.display = "flex";
})
document.querySelector(".close2").addEventListener("click", function () {
    document.querySelector(".popup2").style.display = "none";
})

/*Add Button*/
const add = () => {

    const Name = document.getElementById("name").value;
    const Date = document.getElementById("date").value;
    const CustomerNo = document.getElementById("customer-no").value;
    const InvoiceNo = document.getElementById("invoice-no").value;
    const Amount = document.getElementById("amount").value;
    const TextArea = document.getElementById("text-area").value;
    const tableRef = document.getElementById("tbdy");
    tableRef.innerHTML += `<tr><td><input type="checkbox" /></td><td>${Name}</td><td>${CustomerNo}</td><td>${InvoiceNo}</td><td>${Amount}</td><td>${Date}</td><td>${TextArea}</td></tr>`;

    // alert("hello rahul"
}

document.getElementById("form1").addEventListener("submit", (event) => {
    event.preventDefault()
})


/*
let currentPageNumber = 0;

function onNextclick(){

}

function onPrevclick(){

}

async function DisplayData(){
    const response = await fetch(`/Summer_Internship_Backend/DummyServlet?page_number=${currentPageNumber}`);
    const jsonData = await response.json();

    const tableNode= document.getElementById("Table");

    jsonData.forEach(element => {
        tableNode.innerHTML += `<tr>
        <td>${element.customer_name}</td>
        <td>${element.customer_number}</td>
        <td>${element.total_open_amount}</td>
        <td>${element.delay}</td>
        <td>${element.due_in_date}</td>
        <td>${element.predicted_payment_date}</td>
        <td>${element.Aging_Bucket}</td>
        </tr>`;
    });
    await UpdatePagination();
    currentPageNumber++;
}

async function UpdatePagination(){
    document.getElementById("page-no-current").innerHTML = currentPageNumber;

    const response = await fetch(`/Summer_Internship_Backend/responses?page_number=${currentPageNumber}`);
    const jsonData = await response.json();

    if(jsonData.length === 0){
        document.getElementById("next-button").disabled = true;
    } else{
        document.getElementById("next-button").disabled= false;
    }

    if(currentPageNumber === 0){
        document.getElementById("prev-button").disabled = true;
    } else{
        document.getElementById("prev-button").disabled= false;
    }

    currentPageNumber++;
}

DisplayData();
*/

