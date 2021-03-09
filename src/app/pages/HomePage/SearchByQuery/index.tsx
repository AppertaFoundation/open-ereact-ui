import React from 'react';
import BarCode from './assests/BarCode.png';
import { IconButton, DialogContent, Typography, Box } from '@material-ui/core';
import { Dialog, Button, DialogTitle } from 'components';
import QrReader from 'react-qr-reader';

const SearchByQuery = () => {
  const scannerElement = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [scanResult, setScanResult] = React.useState('');
  const [legacyMode, setLegacyMode] = React.useState(false);
  const [scannerError, setScannerError] = React.useState(null);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleScan = data => {
    if (data) setScanResult(data);
  };
  const handleError = er => {
    if (er && !legacyMode) setLegacyMode(true);
    else if (er) setScannerError(er);
  };

  const openImageDialog = () =>
    scannerElement.current !== null &&
    (scannerElement.current as any).openImageDialog();
  return (
    <>
      <IconButton onClick={handleOpen}>
        <img height={35} src={BarCode} alt="bar code button" />
      </IconButton>
      {open && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle id="title" onClose={handleClose}>
            <Typography component="div" noWrap variant="h5">
              Find Patient by Qr Code
            </Typography>
          </DialogTitle>

          <DialogContent>
            {legacyMode && (
              <Box p={1}>
                <Button.Secondary variant="outlined" onClick={openImageDialog}>
                  Scan Qr Code from File
                </Button.Secondary>
              </Box>
            )}
            <QrReader
              ref={scannerElement}
              delay={300}
              onScan={handleScan}
              onError={handleError}
              legacyMode={legacyMode}
              facingMode="environment"
            />
            <Typography>{`Coded text: ${scanResult}`}</Typography>
            {scannerError && (
              <Typography color="error">{scannerError}</Typography>
            )}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default SearchByQuery;
