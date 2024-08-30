import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';

const QrScanner = () => {
    const [rawValue, setRawValue] = useState(null);
    const [isValid, setIsValid] = useState(null);
    const [displayText, setDisplayText] = useState(null);
    const [isScanning, setIsScanning] = useState(false);


    const handleScan = (result) => {
        if (isScanning || !result) return;  // Prevent multiple triggers if already scanning or no result

        setIsScanning(true);  // Set scanning flag to true

        const scannedValue = result[0].rawValue;
        console.log(scannedValue)
        setRawValue(scannedValue);

        const matchedTicket =  ("https://google.com" == scannedValue);
        console.log(matchedTicket)

        if (matchedTicket) {
            setIsValid(true)
            setDisplayText("Ingresso é válido")
        } else {
            setIsValid(false);
            setDisplayText('Ingresso Inválido');
        }

        // Clear results and reset state after 5 seconds
        setTimeout(() => {
            setRawValue(null);
            setIsValid(null);
            setDisplayText(null);
            setIsScanning(false);
        }, 5000);
    };

    return (
        <div className='flex flex-col items-center'>
            <div className="relative h-1/2 bg-slate-950 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                <Scanner
                    allowMultiple={true}
                    scanDelay={2000}
                    onScan={handleScan}
                />
                {rawValue && (
                    <div className={`absolute bottom-20 w-100 flex-wrap truncate left-1/2 transform -translate-x-1/2 text-lg text-white px-6 py-4 rounded-lg shadow-md ${isValid ? 'bg-green-500' : 'bg-red-500'}`}>
                        {displayText}
                    </div>
                )}
            </div>
        </div>
    );
};

export default QrScanner;
