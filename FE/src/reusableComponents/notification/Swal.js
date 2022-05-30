import swal from 'sweetalert2';

const Swal = {
    success : (message) => (
        swal.fire(
            'Berhasil',
            message,
            'success'
          )
    ),
    failed : (message) => (
        swal.fire({
            type: 'error',
            title: 'Gagal',
            text: message,
          })
    )
}

export default Swal
