// --- KONFIGURASI NOMOR WHATSAPP ---
// Nomor telah diatur ke 13658700681 sesuai permintaan Anda.
const nomerWA = "13658700681"; 

function buyScript(tipe) {
    // Membuat pesan otomatis berdasarkan produk yang diklik
    // Tidak menyertakan harga karena tidak ada harga di list
    const pesan = `Halo Liviaa SHOP, saya tertarik membeli *Akun Premium ${tipe}*. \n\nApakah stok masih tersedia?`;
    
    // Membuat URL WhatsApp
    const url = `https://wa.me/${nomerWA}?text=${encodeURIComponent(pesan)}`;
    
    // Membuka Link WhatsApp secara otomatis
    window.open(url, '_blank');
}
