const ReactNative = require("react-native");
const { NativeModules, DeviceEventEmitter } = ReactNative;
const HoneywellScannerV5 = NativeModules.HoneywellScannerV5 || {};

/**
 * Listen for available events
 * @param  {String} eventName Name of event one of barcodeReadSuccess, barcodeReadFail
 * @param  {Function} handler Event handler
 */

var subscriptionBarcodeReadSuccess = null;
var subscriptionBarcodeReadFail = null;

HoneywellScannerV5.onBarcodeReadSuccess = (handler) => {
  subscriptionBarcodeReadSuccess = DeviceEventEmitter.addListener(
    HoneywellScannerV5.BARCODE_READ_SUCCESS,
    handler
  );
};

HoneywellScannerV5.onBarcodeReadFail = (handler) => {
  subscriptionBarcodeReadFail = DeviceEventEmitter.addListener(
    HoneywellScannerV5.BARCODE_READ_FAIL,
    handler
  );
};

/**
 * Stop listening for event
 * @param  {String} eventName Name of event one of barcodeReadSuccess, barcodeReadFail
 * @param  {Function} handler Event handler
 */
HoneywellScannerV5.offBarcodeReadSuccess = () => {
  subscriptionBarcodeReadSuccess.remove();
};
HoneywellScannerV5.offBarcodeReadFail = () => {
  subscriptionBarcodeReadFail.remove();
};

export default HoneywellScannerV5;
