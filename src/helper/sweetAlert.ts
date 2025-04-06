
import Swal from "sweetalert2";

export enum SweetIcon {
    SUCCESS = 'success',
    WARNING = 'warning'
}

export const notify = (msg:string, icon:SweetIcon) => Swal.fire({
    title: 'fatih todo app',
    text: msg,
    icon: icon,
    confirmButtonText: 'Cool'
})