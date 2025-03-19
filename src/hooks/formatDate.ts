export const formatDate = (date : Date | null) =>{

    // converts the date to "DD-MM-YYYY" format 

    if (date) {
        const day = String(date.getDate()).padStart(2, '0'); // ensure two digits
        const month = String(date.getMonth() + 1).padStart(2, '0'); // ensure two digits
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;  //format as "DD-MM-YYYY"
    }
}

