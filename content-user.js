if(document.getElementsByName("state0").item(0) != null) {
    let table1 = document.getElementsByName("state0").item(0).nextElementSibling;
    let table2 = document.getElementsByName("state1").item(0).nextElementSibling;
    
    document.getElementsByName("state0").item(0).after(table2);
    table2.after(document.getElementsByName("state1").item(0));
    table2.after(table1.nextElementSibling);
}
