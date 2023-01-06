import { toast } from 'react-toastify';
const hitToast = (variant) => {
    // console.log(variant );
    if (!variant.includes("success")) {
        toast(variant, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        throw Error();
    }
    else{
        toast(variant, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

}
export default hitToast;