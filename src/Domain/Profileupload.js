import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import imageCompression from "browser-image-compression";
// import Cropper from 'react-easy-crop';

import addphoto from '../Common/assets/image/add-photo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faUpload } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setCropImage, setregisterDetails } from '../Redux/CreateSlice';
// import Resizeimage from './Resizeimage';



const units = ["bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];

function niceBytes(x) {
    let l = 0,
        n = parseInt(x, 10) || 0;

    while (n >= 1024 && ++l) {
        n = n / 1024;
    }

    return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
}

const imageSize = (file) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    const promise = new Promise((resolve, reject) => {
        reader.onload = function (e) {
            const image = new Image();

            image.src = e.target.result;

            image.onload = function () {
                const height = this.height;
                const width = this.width;

                resolve({ width, height });
            };

            image.onerror = reject;
        };
    });

    return promise;
};

console.log(0,imageSize)
const Profileupload = () => {
    const { registerDetails,cropImage } = useSelector((state) => state.matrimony_profile)
    const [image, setImage] = useState(null);
    // const [cropImage, setCropImage] = useState([]);
    const [cropper, setCropper] = useState();
    const [hideCrop, setHideCrop] = useState(0)
    const [errorMessage, setErrorMessage] = useState('');
    const [croppedImage, setCroppedImage] = useState(null);

    const dispatch = useDispatch()

    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        const imageDimensions = await imageSize(file);
        // console.log({ imageDimensions, size: niceBytes(file.size) });
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: imageDimensions?.width > 1300 ? 1300 : imageDimensions?.width,
            useWebWorker: true,
        };
        const compressedImg = await imageCompression(file, options);
        console.log(6, niceBytes(compressedImg.size))
        // Convert the compressed image to base64
        const base64String = await convertToBase64(compressedImg);

        // return base64String;
        setImage(URL.createObjectURL(file));
        // setImage(base64String);
        setErrorMessage('');
    }, []);
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };
    const selectImage = () => {
        setHideCrop(0);

    }

    const handleCrop = async () => {
        if (typeof cropper !== 'undefined') {
            const croppedDataUrl = cropper.getCroppedCanvas().toDataURL();
            setCroppedImage(croppedDataUrl);
            dispatch(setCropImage([...cropImage, croppedDataUrl]));
            // dispatch(setregisterDetails({...registerDetails,profile_image:cropImage}))
            // console.log(0, niceBytes(cropImage).size);
        }
        setImage(null);
    };
    // if(cropImage.length > 0){
    //     console.log('ajith',cropImage);
        // dispatch(setregisterDetails({...registerDetails,profile_image:cropImage}))
    // }else{
    //     console.log('kumar',cropImage);
    // }
    console.log(registerDetails)
    const { getRootProps, getInputProps } = useDropzone({
        // image: 'addphoto',
        accept: 'image/*',
        onDrop,
    });
    const save = () => {
        alert('successfully upload image')
        setErrorMessage('')
        dispatch(setCropImage([]))
    }
    const deleteitem = (id) => {
        const idToRemove = id; // Replace with the actual 'id' you want to remove
        const updatedFiles = cropImage.filter((file, index) => index !== idToRemove);
        dispatch(setCropImage(updatedFiles));
    };
    // console.log('ajith',cropImage);
    // console.log(image)
    return (
        <div>
            <div {...getRootProps()} style={{ width: '150px', height: '40px', position: 'relative', left: '30px', paddingBottom: '50px', marginTop: '25px' }}>
                <label htmlFor="upload" className="custom-file-upload">
                    {/* <input type='file' onClick={selectImage}/> */}
                    <img src={addphoto} alt="upload" className="w-100 h-100" onClick={selectImage} />
                    {/* <FontAwesomeIcon icon={faUpload} /> */}
                </label>
            </div>
            {errorMessage && <p className='mx-4 my-3 text-danger'>{errorMessage}</p>}
            {hideCrop ? <></> : <> {image ? (
                <Cropper
                    style={{ height: '100%', width: '100%', border: '1px solid #ccc', position: 'relative' }}
                    initialAspectRatio={1}
                    preview=".img-preview"
                    src={image}
                    viewMode={1}
                    guides={true}
                    minCropBoxHeight={10}
                    minCropBoxWidth={10}
                    background={false}
                    responsive={true}
                    autoCropArea={1}
                    checkOrientation={false}
                    onInitialized={(instance) => {
                        setCropper(instance);
                    }}
                />
            ) : (
                <>
                </>
            )}</>}
            {hideCrop ? <></> : <>{image && (
                <div>
                    <button type='button' className='upload-img preview-btn' style={{ marginTop: '100px' }} onClick={handleCrop}>Crop Image</button>
                </div>
            )}</>}
            <div className='row m-0'>

                {cropImage.map((data, index) => {
                    return (
                        <>
                            <div className='col-6 my-3 text-center'>
                                <img src={data} className='w-100 h-100 upload-photo' />
                                <button type="button" className="close position-absolute border-0 bg-none close-btn" onClick={() => deleteitem(index)}>
                                    <FontAwesomeIcon icon={faClose} />
                                </button>
                            </div>
                        </>
                    )
                })}
            </div>
            {/* {cropImage.length > 0 ? <><div><button className='upload-img' onClick={save}>Upload Image</button></div></> : <></>} */}
        </div>
    );
};

export default Profileupload;
