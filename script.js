document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ticketForm');
    const preview = document.getElementById('ticketPreview');
    const qrCodeDiv = document.getElementById('qrCode');
    const downloadBtn = document.getElementById('downloadBtn');
    const overlay = document.getElementById('qrOverlay');
    const qrCanvas = document.getElementById('qrCanvas');
    const closeOverlayBtn = document.getElementById('closeOverlay');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const eventName = document.getElementById('event-name').value;
        const eventDate = document.getElementById('event-date').value;
        const ticketPrice = document.getElementById('ticket-price').value;
        const section = document.getElementById('section').value;
        const row = document.getElementById('row').value;
        const seat = document.getElementById('seat').value;
        const ticketData = `Event: ${eventName}, Date: ${eventDate}, Price: $${ticketPrice}, Section: ${section}, Row: ${row}, Seat: ${seat}`;

        // Update preview
        document.getElementById('preview-name').textContent = eventName;
        document.getElementById('preview-date').textContent = eventDate;
        document.getElementById('preview-price').textContent = ticketPrice;
        document.getElementById('preview-section').textContent = section;
        document.getElementById('preview-row').textContent = row;
        document.getElementById('preview-seat').textContent = seat;

        // Generate QR code
        qrCodeDiv.innerHTML = '';
        new QRCode(qrCodeDiv, {
            text: ticketData,
            width: 150,
            height: 150,
            colorDark: "#000000",
            colorLight: "#ffffff"
        });

        // Show ticket preview
        preview.style.display = 'block';

        // Download functionality
        downloadBtn.onclick = function() {
            showOverlay(ticketData);
        };
    });

    // Overlay functionality
    function showOverlay(data) {
        overlay.style.display = 'flex';
        qrCanvas.innerHTML = '';
        new QRCode(qrCanvas, {
            text: data,
            width: 300,
            height: 300,
            colorDark: "#000000",
            colorLight: "#ffffff"
        });

        // Download QR code
        setTimeout(() => {
            qrCanvas.toBlob(function(blob) {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'ticket-qr.png';
                link.click();
            }, 'image/png');
        }, 100);

        closeOverlayBtn.onclick = function() {
            overlay.style.display = 'none';
        };
    }
});