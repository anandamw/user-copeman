function kirimPesan() {
  var nama_pembeli = document.getElementById("nama_pembeli").value;
  var nomer_telepon_pembeli = document.getElementById(
    "nomer_telepon_pembeli"
  ).value;
  var alamat_pembeli = document.getElementById("alamat_pembeli").value;
  var produk = document.getElementById("produk").value;
  var pesan = document.getElementById("pesan").value;
  var jumlah_pesanan = document.getElementById("jumlah_pesanan").value;
  var message = document.getElementById("message").value;

  // Membentuk URL WhatsApp
  var url =
    "https://wa.me/6289635588388" +
    "?text=Halo,%20saya%20" +
    encodeURIComponent(nama_pembeli) +
    "%20ingin%20pesan%20produk%20" +
    encodeURIComponent(produk) +
    "%20ke%20alamat%20" +
    encodeURIComponent(alamat_pembeli) +
    ".%0A" +
    "Silakan%20konfirmasi%20pemesanan%20lewat%20nomor%20telepon%20" +
    encodeURIComponent(nomer_telepon_pembeli) +
    ".%0A" +
    "Pesan%20tambahan:%20" +
    encodeURIComponent(pesan) +
    ".%0A" +
    "Jumlah%20pesanan:%20" +
    encodeURIComponent(jumlah_pesanan) +
    ".%0A" +
    "Message:%20" +
    encodeURIComponent(message) +
    ".%0A" +
    "Terima%20kasih.";

  // Mengarahkan browser ke URL WhatsApp
  window.location.href = url;
}
