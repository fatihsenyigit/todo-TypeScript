
import Swal from "sweetalert2";

export const notify = (msg:string, icon) => Swal.fire({
    title: 'fatih todo app',
    text: msg,
    icon: icon,
    confirmButtonText: 'Cool'
})