const files = ['file111', 'file 304','file404'];

const upload_Files = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let uploadedFiles = [...files]; // Copy the files array
            resolve(uploadedFiles);
        }, 1000);
    });
};

const encrypted_files = () => {
    return upload_Files()
        .then((uploadedFiles) => {
            for (let i = 0; i < uploadedFiles.length; i++) {
                uploadedFiles[i] = uploadedFiles[i] + ' encrypted';
            }
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(uploadedFiles);
                }, 2000);
            });
        });
};

async function encryptedFile() {
    let random = Math.random() * 300;
    try {
        // Check file size
        if (random < 250) {
            console.log('Size Ok');
        } else {
            throw new Error('Size must be under 250MB');
        }

        // Encrypt files
        const encryptedFiles = await encrypted_files();
        console.log(`---Your File size is = ${random} MB
        File IDs: ${encryptedFiles}`);
    } catch (error) {
        console.error(error);
    }
}

encryptedFile();
