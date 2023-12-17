function generateQRCode() {
    var text = document.getElementById('text-input').value;
    var qr = new QRious({
        element: document.getElementById('qrcode'),
        value: text,
        size: 200
    });

    // Aktifkan tautan unduhan
    var downloadLink = document.getElementById('download-link');
    downloadLink.setAttribute('href', qr.toDataURL('image/png'));
    downloadLink.style.display = 'block';
}
