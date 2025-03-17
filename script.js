document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Seller Dashboard Logic
    const sellerForm = document.getElementById('ticketForm');
    const sellerPreview = document.getElementById('ticketPreview');
    const qrCodeDiv = document.getElementById('qrCode');
    const downloadBtn = document.getElementById('downloadBtn');
    const overlay = document.getElementById('qrOverlay');
    const qrCanvas = document.getElementById('qrCanvas');
    const closeOverlayBtn = document.getElementById('closeOverlay');

    if (sellerForm) {
        console.log('Seller form found, adding event listener');
        sellerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');

            // Get form values
            const eventName = document.getElementById('event-name').value;
            const eventDate = document.getElementById('event-date').value;
            const ticketPrice = document.getElementById('ticket-price').value;
            const section = document.getElementById('section').value;
            const row = document.getElementById('row').value;
            const seat = document.getElementById('seat').value;
            const status = document.getElementById('status').value;
            const ticketData = `Event: ${eventName}, Date: ${eventDate}, Price: $${ticketPrice}, Section: ${section}, Row: ${row}, Seat: ${seat}, Status: ${status}`;

            // Update preview
            document.getElementById('preview-name').textContent = eventName;
            document.getElementById('preview-date').textContent = eventDate;
            document.getElementById('preview-price').textContent = ticketPrice;
            document.getElementById('preview-section').textContent = section;
            document.getElementById('preview-row').textContent = row;
            document.getElementById('preview-seat').textContent = seat;
            document.getElementById('preview-status').textContent = status;

            // Generate QR code
            qrCodeDiv.innerHTML = '';
            try {
                console.log('Attempting to generate QR code');
                if (typeof QRCode === 'undefined') {
                    throw new Error('QRCode library not loaded. Check internet connection or CDN.');
                }
                new QRCode(qrCodeDiv, {
                    text: ticketData,
                    width: 150,
                    height: 150,
                    colorDark: "#000000",
                    colorLight: "#ffffff"
                });
                console.log('QR code generated successfully');
            } catch (error) {
                console.error('QR code generation failed:', error);
                alert(`Failed to generate QR code. Check console for details. Error: ${error.message}`);
                return;
            }

            // Show ticket preview
            sellerPreview.style.display = 'block';
            console.log('Ticket preview displayed');

            // Download functionality
            downloadBtn.onclick = function() {
                showOverlay(ticketData);
            };
        });

        // Overlay functionality
        function showOverlay(data) {
            overlay.style.display = 'flex';
            qrCanvas.innerHTML = '';
            try {
                if (typeof QRCode === 'undefined') {
                    throw new Error('QRCode library not loaded for overlay.');
                }
                new QRCode(qrCanvas, {
                    text: data,
                    width: 300,
                    height: 300,
                    colorDark: "#000000",
                    colorLight: "#ffffff"
                });
            } catch (error) {
                console.error('Overlay QR code generation failed:', error);
                alert(`Failed to generate QR code for overlay. Error: ${error.message}`);
                return;
            }

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
    } else {
        console.log('Seller form not found');
    }

    // Scanner Dashboard Logic (unchanged for now)
    const scannerContainer = document.getElementById('scannerContainer');
    const startScanBtn = document.getElementById('startScanBtn');
    const scanStatus = document.getElementById('scan-status');
    const scanEvent = document.getElementById('scan-event');
    const scanId = document.getElementById('scan-id');
    let html5QrcodeScanner;

    if (startScanBtn) {
        startScanBtn.addEventListener('click', () => {
            if (!html5QrcodeScanner) {
                html5QrcodeScanner = new Html5QrcodeScanner('scannerContainer', {
                    fps: 10,
                    qrbox: 250
                });

                html5QrcodeScanner.render(success, error);

                function success(result) {
                    scanStatus.textContent = 'Scanned';
                    const data = result.split(', ');
                    scanEvent.textContent = data[0].replace('Event: ', '');
                    scanId.textContent = data.slice(1).join(', ');
                    html5QrcodeScanner.clear();
                    html5QrcodeScanner = null;
                }

                function error(err) {
                    console.warn(err);
                }
            }
        });
    }
});