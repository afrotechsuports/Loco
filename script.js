document.getElementById('ticketForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const ticketPrice = document.getElementById('ticket-price').value;
    const ticketData = `Event: ${eventName}, Date: ${eventDate}, Price: $${ticketPrice}`;

    // Update preview
    document.getElementById('preview-name').textContent = eventName;
    document.getElementById('preview-date').textContent = eventDate;
    document.getElementById('preview-price').textContent = ticketPrice;

    // Generate QR code in preview
    const qrCodeDiv = document.getElementById('qrCode');
    qrCodeDiv.innerHTML = '';
    QRCode.toCanvas(ticketData, { width: 150 }, function(err, canvas) {
        if (err) console.error(err);
        qrCodeDiv.appendChild(canvas);
    });

    // Show download button
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.style.display = 'block';
    downloadBtn.onclick = function() {
        showOverlay(ticketData);
    };
});

// Overlay for larger QR code and download
function showOverlay(data) {
    const overlay = document.getElementById('qrOverlay');
    const qrCanvas = document.getElementById('qrCanvas');
    overlay.style.display = 'flex';

    QRCode.toCanvas(qrCanvas, data, { width: 300 }, function(err) {
        if (err) console.error(err);
    });

    document.getElementById('closeOverlay').onclick = function() {
        overlay.style.display = 'none';
    };

    // Download QR code
    qrCanvas.toBlob(function(blob) {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'ticket-qr.png';
        link.click();
    });
}