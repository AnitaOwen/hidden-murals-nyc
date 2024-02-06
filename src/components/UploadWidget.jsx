import { useEffect, useRef } from "react"

const UploadWidget = ({setImageURL}) => {

    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary 
        console.log(cloudinaryRef.current)
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName:'dhexjuuzd',
            uploadPreset: 'upload-image',
        }, function (error, result) {
            if (result && result.event === 'success') {
                const uploadedURL = result.info.secure_url;
                setImageURL(uploadedURL);
                console.log('Image uploaded. URL:', uploadedURL);
            } else if (error) {
                console.error('Error uploading image:', error);
            }
            console.log(result.info.url)
        })
    }, [])
    return (
        <button className="add-image-button" onClick={() => widgetRef.current.open()}>
            Add Image
        </button>
    )
}

export default UploadWidget