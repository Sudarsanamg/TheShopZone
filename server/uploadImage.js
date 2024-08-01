require('dotenv').config(); // Load environment variables from .env file

const { BlobServiceClient } = require('@azure/storage-blob');
const multer = require('multer');
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors=require('cors')


const app = express();
app.use(cors())
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const containerName = process.env.CONTAINER_NAME;

if (!connectionString) {
  throw new Error('Azure Storage connection string not found in environment variables');
}

const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);

app.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded');
  }

  const blobName = `${Date.now()}-${file.originalname}`;
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  try {
    await blockBlobClient.uploadFile(file.path);
    fs.unlinkSync(file.path); // Clean up local file after upload

    const fileUrl = `https://${blobServiceClient.accountName}.blob.core.windows.net/${containerName}/${blobName}`;
    res.status(200).json({ url: fileUrl });
  } catch (error) {
    console.error('Error uploading file to Azure:', error);
    res.status(500).send(`Upload failed: ${error.message}`);
  }
});

const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
