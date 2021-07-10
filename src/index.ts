import { NativeModules, NativeEventEmitter } from 'react-native';

const { HoneywellScanner } = NativeModules;

/**
 * Listen for available events
 * @param  {String} eventName Name of event one of barcodeReadSuccess, barcodeReadFail
 * @param  {Function} handler Event handler
 */

const barcodeReaderEmitter = new NativeEventEmitter(HoneywellScanner);

var subscriptionBarcodeReadSuccess = null;
var subscriptionBarcodeReadFail = null;

HoneywellScanner.onBarcodeReadSuccess = (handler) =>
{
    subscriptionBarcodeReadSuccess === null || subscriptionBarcodeReadSuccess === void 0 ? void 0 : subscriptionBarcodeReadSuccess.remove();
    subscriptionBarcodeReadSuccess = null;
    subscriptionBarcodeReadSuccess = barcodeReaderEmitter.addListener(HoneywellScanner.BARCODE_READ_SUCCESS, handler);
}

HoneywellScanner.onBarcodeReadFail = (handler) =>
{
    subscriptionBarcodeReadFail === null || subscriptionBarcodeReadFail === void 0 ? void 0 : subscriptionBarcodeReadFail.remove();
    subscriptionBarcodeReadFail = null;
    subscriptionBarcodeReadFail = barcodeReaderEmitter.addListener(HoneywellScanner.BARCODE_READ_FAIL, handler);
}

/**
 * Stop listening for event
 * @param  {String} eventName Name of event one of barcodeReadSuccess, barcodeReadFail
 * @param  {Function} handler Event handler
 */
 HoneywellScanner.offBarcodeReadSuccess = () => {
    subscriptionBarcodeReadSuccess === null || subscriptionBarcodeReadSuccess === void 0 ? void 0 : subscriptionBarcodeReadSuccess.remove();
};
HoneywellScanner.offBarcodeReadFail = () => {
    subscriptionBarcodeReadFail === null || subscriptionBarcodeReadFail === void 0 ? void 0 : subscriptionBarcodeReadFail.remove();
};


export default HoneywellScanner;
